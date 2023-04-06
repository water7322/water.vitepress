# 文件分块上传

MDN 当中对文件的描述：https://developer.mozilla.org/zh-CN/docs/Web/API/File

## 分片上传

1. 使用 input 标签的 onchange 事件获取待上传的文件

2. 将文件分块，默认以 5MB 为例，利用文件 File 接口继承了 [Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 接口的属性：[Blob.slice([start[, end[, contentType]]])](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/slice)，生成一个 chunkList

```js
const handleFileChunk = function (file, chunkSize) {
    const chunkList = [];
    // 索引值
    let index = 0;
    while (index < file.size) {
        //以最后一个文件块的实际结束大小为准。
        const endIndex = index + chunkSize < file.size ? index + chunkSize : file.size;
        const fileChunkFile = file.slice(index, endIndex);
        index += chunkSize;
        chunkList.push({ file: fileChunkFile });
    }
    return chunkList;
};
```

3. 计算整体文件的 MD5 值，重新构造 fileChunkList，将辅助信息加入其中，进行并行上传

```js
//文件分块
const fileList = handleFileChunk(targetFile, SpliceChunkSize);
const itemHash = await getFileHash(targetFile);
const info = fileList.map(({ file }, index) => ({
    //整个文件hash
    fileHash: itemHash,
    index,
    //文件个数
    fileCount: fileList.length,
    //当前文件块的hash
    hash: itemHash + '-' + index,
    chunk: file,
    //文件总体大小
    totalSize: targetFile.size,
    //单个文件大小
    size: file.size
}));

//并行上传所有文件
uploadFile(info, targetFile.name);
```

4. 服务端在接收到客户端上传的文件分块后，创建临时目录存储分块

5. 分块进行 merge，merge 之前需要根据客户端传回的信息来判断文件的完整性

```js
let arr: any = [];
//同步读取存储目录下的分块
const readDir = fs.readdirSync(pathName);
//目录下分块的数量<总数不能合并
if (readDir && readDir.length < totalCount) return false;
//获取目录下所有真正属于该文件的 chunk，以大文件 hash 为准
for (let i = 0; i < readDir.length; i++) {
    /\*_读取 stats 实例 _/;
    const curFile = fs.statSync(path.join(pathName, readDir[i]));
    if (curFile.isFile() && readDir[i].includes(hash + '')) {
        arr.push(readDir[i]);
    }
}
//数量一样，可以合并
return arr.length === totalCount;
```

6. 最后通过读写文件流的形式将分块文件合并到一起

```js
// 根据 chunk 下标进行排序,方便合并
filterPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
await Promise.all(
    filterPaths.map((filterPath, index) => {
        //并发写入，需要知道开始和结束位置
        let end = (index + 1) * splitSize;
        if (index === fileCount - 1) {
            end = totalSize + 1;
        }
        return pipeStream(
            path.resolve(chunkDir, filterPath),
            // 指定位置创建可写流
            fs.createWriteStream(filePath, {
                start: index _ splitSize,
                end: end,
            })
        );
    })
);

const pipeStream = (path, writeStream) =>
    new Promise((resolve) => {
        const readStream = fs.createReadStream(path);
        readStream.on('end', () => {
            fs.unlinkSync(path);
            resolve();
        });
        readStream.pipe(writeStream);
    });
```

&emsp;&emsp;文件切成多块，独立传输，上传完成后合并。具体为客户端在上传一个文件的时候会按照一定的规则然后把这个文件切成多块，而每一块都会进行独立的传输过程，这个过程包括文件块的一个完整性校验等等，而在所有的块上传完成之后云端就会按照块的一个顺序进行合并，合并完成的文件就是客户端之前上传的文件，最终要保证传输内容的完整性

&emsp;&emsp;对于小文件来说不建议使用分块上传，一般来说几 MB 的文件都属于小文件，因为文件体积本来就小，也就没有必要采取分块上传了，即使使用了分块上传，而且只分成了一块来上传，效率也会比普通上传低一点，因为他请求接口上传的步骤会多一些，也就会消耗更多的时间

&emsp;&emsp;而且可以并行上传文件的分块，并且可以不按照顺序来进行传输，只要最终所有的块传输完成了就代表传输完成了，并行上传带来的好处就是只要合理的设置上传数量就可以极大的提高传输效率，也可以减少传输失败后重试的流量和时间（断点续传）

<center>

![](/.vitepress/public/blog/share/fileUpload.png)

</center>

## 文件的校验值算法

<center>

![](/.vitepress/public/blog/share/fileHash.png#pic_right)

</center>

&emsp;&emsp;CRC（16/32/64），生成的校验值长度，4 字节/8 字节

&emsp;&emsp;MD5 的校验码是 16 字节长度也就是 108 位

&emsp;&emsp;SHA1 校验码是 20 字节，160 位长度

&emsp;&emsp;一般管 CRC 叫做 CRC 的校验码，而 MD5 和 SHA1 都叫做 HASH 值或散列值。主要是原理的不同，CRC 使用的是多项式除法（内容过于复杂...），而 MD5 和 SHA1 使用的是轮转的计算，安全性而言（也就是算法的纠错能力，纠错准确率越高也就是安全性越高），具体表现为比如两个文件的内容不一样但有可能这两个文件算出来的校验值是一样的，如果这种相同校验值碰撞的概率越小的话，那么就可以认为这个算法的安全性越高，然后在这三种校验算法当中 CRC < MD5 < SHA1 ,从计算效率来讲 CRC 的计算效率的最高的，最终根据效率和安全性导致从应用场景的不一样，CRC 一般用传输数据的校验比如客户端与服务端要传输一个文件，每次传输的时候在客户端与服务端两边都会各自计算一次 CRC 的校验值然后进行一个校验的对比，如果 CRC 校验值通过的话那么我们就可以认为上传这个文件的其中一块是完整的没有被篡改或丢失，而 MD5 和 SHA1 往往用于文件的校验和数据的签名等，比如 SHA1 值可以作为文件的唯一标志。
