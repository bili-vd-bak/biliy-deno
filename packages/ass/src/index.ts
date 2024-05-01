import getConfig from "./config.ts";
import parse from "./parse/bilibili.ts";
import { filterDanmaku, layoutDanmaku, mergeDanmaku } from "./util/index.ts";
import ass from "./ass/create.ts";
import { SubtitleStyle } from "./types.ts";

type Options = {
	filename?: string;
	title?: string;
	substyle?: Partial<SubtitleStyle>;
};
/**
 * 使用bilibili弹幕(XMl)生成ASS字幕文件
 * @param {string} text XML弹幕文件内容
 * @param {Options} options 杂项
 * @returns {string} 返回ASS字幕文件内容
 * @description 杂项相关  
 * `filename`: 还原文件为XML时使用的默认文件名  
 * `title`: ASS [Script Info] Title 项的值,显示于播放器字幕选择  
 * `substyle`: ASS字幕样式  
 * @example
 * ```ts
 * import fs from 'fs'
  import { generateASS } from 'jsr:@biliy-deno/danmaku2ass'
  const filename = 'example.xml'
	const xmlText = fs.readFileSync(filename, 'utf-8')
	const assText = generateASS(xmlText, { filename, title: 'Quick Example' })
	fs.writeFileSync(`${filename}.ass`, assText, 'utf-8')
 * ```
 */
export function generateASS(text: string, options?: Options): string {
	const result = parse(text);
	const config = getConfig(options?.substyle);
	const filteredList = filterDanmaku(result.list, config.block);
	const mergedList = mergeDanmaku(filteredList, config.mergeIn);
	const layoutList = layoutDanmaku(mergedList, config);
	const content = ass(layoutList, result.list, config, {
		filename: options?.filename || "unknown",
		title: options?.title || "unknown",
	});

	return content;
}
