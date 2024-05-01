import { assign, hexColorToRGB, uniqueArray } from "./util/index.ts";
import { SubtitleStyle } from "./types.ts";

const builtinRules: { [key: string]: boolean } = {
	COLOR: true,
	TOP: true,
	BOTTOM: true,
};

const convertBlockRule = (rule: string) =>
	builtinRules[rule] ? rule : new RegExp(rule);

export default (overrides = {}): SubtitleStyle => {
	const defaults = {
		fontSize: [25, 25, 36],
		fontName: "SimHei",
		color: "#ffffff",
		outlineColor: null,
		backColor: null,
		outline: 2,
		shadow: 0,
		bold: false,
		padding: [2, 2, 2, 2],
		playResX: 1280,
		playResY: 720,
		scrollTime: 8,
		fixTime: 4,
		opacity: 0.6,
		bottomSpace: 60,
		includeRaw: true,
		mergeIn: -1,
		block: [],
	};

	const config = assign(defaults, overrides);
	config.color = hexColorToRGB(config.color);
	config.outlineColor = config.outlineColor &&
		hexColorToRGB(config.outlineColor);
	config.backColor = config.backColor && hexColorToRGB(config.backColor);
	config.block = uniqueArray(config.block).map(convertBlockRule);

	return config;
};
