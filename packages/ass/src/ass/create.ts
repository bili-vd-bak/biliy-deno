import info from "./info.ts";
import style from "./style.ts";
import event from "./event.ts";
import raw from "./raw.ts";
import { Danmaku, SubtitleStyle } from "../types.ts";

export default (
	list: any,
	rawList: Danmaku[],
	config: SubtitleStyle,
	context = {},
) => {
	const content = [info(config, context), style(config), event(list, config)];

	if (config.includeRaw) {
		content.push(raw(rawList, config, context));
	}

	return content.join("\n\n") + "\n";
};
