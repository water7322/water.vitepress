import fs from 'fs-extra';
import path from 'path';

export default function markdownPlugin(): any {
    return {
        name: 'markdownPlugin',
        enforce: 'pre',
        transform(code, id, opt) {
            const mdRE = /\.md$/;
            const sourceCodeRE = /<SourceCode.*\/>/g;
            if (!mdRE.test(id) || !sourceCodeRE.test(code)) return code;
            const sourceCodeList = code.match(sourceCodeRE);
            const srcRE = /src="(.*)"/;

            const fileDir = path.dirname(id);
            for (const sourceCode of sourceCodeList) {
                const src = sourceCode.match(srcRE);
                const file = src[0].replace(srcRE, '$1');
                // 获取文件后缀
                const suffix = file.substring(file.lastIndexOf('.') + 1);

                const filePath = path.resolve(fileDir, file);

                const fileText = fs.readFileSync(filePath, 'utf-8');

                code = code.replace(
                    sourceCode,
                    `\`\`\`${suffix}
${fileText}
\`\`\``
                );
            }
            return code;
        }
    };
}
