import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';

export default defineUserConfig({
	lang: 'zh-CN',
	title: '不吃兔子的鱼香肉丝',
	description: '这是我的第一个 VuePress 站点',
	base: '/', //默认路径
	head: [
		// 设置 favor.ico，docs/.vuepress/public 下
		['link', { rel: 'icon', href: '/images/Rab.png' }],
	],
	// theme: '',
	theme: defaultTheme({
		// Public 文件路径
		logo: '/images/Rab5.png',
		// URL
		// logo: 'https://vuejs.org/images/logo.png',
		// 默认主题配置
		navbar: [
			//   // NavbarItem
			// {
			// 	text: 'Group',
			// 	children: [
			// 		{
			// 			text: 'JavaScript',
			// 			children: ['/group/sub/foo.md', '/group/sub/bar.md'],
			// 		},
			// 	],
			// },
			{
				text: 'Home',
				link: '/',
			},
			// NavbarGroup
			// {
			// 	text: 'Group',
			// 	children: ['/Front/项目相关.md'],
			// },
			// 字符串 - 页面文件路径
			// 嵌套 Group - 最大深度为 2
			{
				text: '前端',
				children: [
					{
						text: 'Vue',
						children: ['/Front/项目相关.md'],
					},
				],
			},
		],
		// // 侧边栏数组
		// // 所有页面会使用相同的侧边栏
		// sidebar: [
		// 	// SidebarItem
		// 	{
		// 		text: 'Foo',
		// 		link: '/foo/',
		// 		children: [
		// 			// SidebarItem
		// 			{
		// 				text: 'github',
		// 				link: 'https://github.com',
		// 				children: [],
		// 			},
		// 			// 字符串 - 页面文件路径
		// 			'/foo/bar.md',
		// 		],
		// 	},
		// 	// 字符串 - 页面文件路径
		// 	'/bar/README.md',
		// ],
	}),
});
