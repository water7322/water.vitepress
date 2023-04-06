/**
 * 该文件用于在本地环境根据.leetcode里的文件自动生成md文件
 */

import fs from 'fs-extra';
import leetcodeLinks from './leetcodeLinks';
const files: string[] = fs.readdirSync('./.leetcode');

for (const file of files) {
    const fileName = file.slice(0, -3);
    const length = fileName.length;
    const bool = fileName[length - 2] === '_';

    // 题目序号
    const index = +fileName.slice(0, fileName.indexOf('.'));
    const leetcodeLink = leetcodeLinks[index - 1];

    const filePath = bool ? `./md/${fileName.slice(0, -2)}.md` : `./md/${fileName}.md`;
    if (!fs.existsSync(filePath)) {
        fs.outputFileSync(
            filePath,
            `# [${fileName}](${leetcodeLink})

<SourceCode src="../.leetcode/${fileName}.ts" />
`
        );
    }
}
