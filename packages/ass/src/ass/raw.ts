// import { gzipSync } from 'node:zlib';
import { gzip } from "npm:pako@^2.1.0";
import { encodeBase64 } from "jsr:@std/encoding/base64";
import { Danmaku } from "../types.ts";

export default (list: Danmaku[], config: any, context: any) => {
	const raw = { list, config, context };
	const rawText = JSON.stringify(raw);
	// return ';Raw: ' + gzipSync(rawText).toString('base64');
	return ";Raw: " + encodeBase64(gzip(new TextEncoder().encode(rawText)));
};
