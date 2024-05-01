type ExtraInfo = {
	filename?: string;
	title?: string;
};

export default (
	{ playResX, playResY }: any,
	{ filename, title }: ExtraInfo,
) => {
	const content = [
		"[Script Info]",
		`Title: ${title}`,
		`Original Script: 根据 ${filename} 的弹幕信息，由 https://github.com/bili-vd-bak/biliy-deno 生成`,
		"ScriptType: v4.00+",
		"Collisions: Reverse",
		`PlayResX: ${playResX}`,
		`PlayResY: ${playResY}`,
		"Timer: 100.0000",
	];
	return content.join("\n");
};
