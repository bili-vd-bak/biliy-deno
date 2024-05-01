import { Danmaku, SubtitleStyle } from "../types.ts";
import dialogue from "./dialogue.ts";

export default (list: Danmaku[], config: SubtitleStyle) => {
	const content = [
		"[Events]",
		"Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text",
		...list.map((danmaku) => dialogue(danmaku, config)),
	];

	return content.join("\n");
};
