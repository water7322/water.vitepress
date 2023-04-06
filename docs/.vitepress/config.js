const algorithmRouter = require('../interview/algorithm/router');

module.exports = {
    base: '/',
    title: 'water768的前端日志',
    description: '欢迎访问我的前端日志',
    ga: 'UA-121061441-1',
    markdown: {
        lineNumbers: true
    },
    dest: './dist',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    themeConfig: {
        repo: 'lmjben/blog',
        nav: [
            {
                text: '博客',
                link: '/blog/'
            },
            {
                text: '面试题',
                link: '/interview/'
            }
        ],
        sidebar: {
            '/blog/': getBlogSidebar(),
            '/interview/': getInterviewSidebar(),
        }
    }
};
function getBlogSidebar() {
    const path = '/blog/';
    const sharePath = `${path}share/`
    return [
        {
            text: 'Framework',
        },
        {
            text: 'CSS',
        },
        {
            text: '网络协议',
        },
        {
            text: '运维相关',
        },
        {
            text: 'JS 基础',
        },
        {
            text: '编程基础',
        },
        {
            text: '前端分享',
            children: [
                {
                    text: '文件分块上传',
                    link: `${sharePath}fileChunkUpload`
                }
            ]
        }
    ];
}
function getInterviewSidebar() {
    const path = '/interview/';
    const jsCodePath = '/interview/js/code/';
    const jsPromisePath = '/interview/js/promise/';
    return [
        {
            text: '前端',
            children: [
                {
                    text: 'JS手写',
                    children: [
                        { text: 'new', link: `${jsCodePath}new` },
                        { text: 'create', link: `${jsCodePath}create` },
                        { text: 'bind', link: `${jsCodePath}bind` },
                        { text: 'call', link: `${jsCodePath}call` },
                        { text: 'apply', link: `${jsCodePath}apply` },
                        { text: 'extend', link: `${jsCodePath}extend` },
                        { text: 'instance', link: `${jsCodePath}instance` },
                        { text: 'debounce', link: `${jsCodePath}debounce` },
                        { text: 'throttle', link: `${jsCodePath}throttle` },
                        { text: 'curry', link: `${jsCodePath}curry` },
                        { text: 'single', link: `${jsCodePath}single`},
                        { text: 'koa', link: `${jsCodePath}koa` },
                    ]
                },
                {
                    text: 'Promise相关',
                    children: [
                        { text: 'Promise A+', link: `${jsPromisePath}promise` },
                        { text: 'resolve', link: `${jsPromisePath}resolve` },
                        { text: 'reject', link: `${jsPromisePath}reject` },
                        { text: 'catch', link: `${jsPromisePath}catch` },
                        { text: 'finally', link: `${jsPromisePath}finally` },
                        { text: 'all', link: `${jsPromisePath}all` },
                        { text: 'allSettled', link: `${jsPromisePath}allSettled` },
                        { text: 'race', link: `${jsPromisePath}race` },
                        { text: 'any', link: `${jsPromisePath}any` },
                        { text: 'parallel', link: `${jsPromisePath}parallel` },
                    ]
                }
            ]
        },
        {
            text: 'leetcode字节跳动高频题',
            link: '/interview/algorithm/index',
            children: algorithmRouter
        }
    ];
}