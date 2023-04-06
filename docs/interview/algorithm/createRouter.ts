/**
 * 该文件用于在本地环境根据md目录里的文件自动生成路由
 */

import fs from 'fs-extra';

type Route = {
    text: string;
    link: string;
};
const files: string[] = fs.readdirSync('./md');
files.sort((file1, file2) => {
    const num1 = +file1.slice(0, file1.indexOf('.'));
    const num2 = +file2.slice(0, file2.indexOf('.'));
    return num1 - num2;
});
const algorithmPath = '/interview/algorithm/md/';
const router: Route[] = [];
for (const file of files) {
    const fileName = file.slice(0, -3);
    router.push({
        text: fileName,
        link: algorithmPath + fileName
    });
}
fs.outputFileSync(
    './router.js',
    `module.exports = ${JSON.stringify(router)}
`
);
console.log(router);
