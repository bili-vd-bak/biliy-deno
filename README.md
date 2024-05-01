# @biliy-deno/danmaku2ass

> forked from <https://github.com/otakustay/danmaku-to-ass>
> forked from <https://github.com/justorez/biliy>

Fix to use with Deno.  
使用bilibili弹幕(XMl)生成ASS字幕文件。  

## Installation

Find more detalis [here(jsr.io)](https://jsr.io/@biliy-deno/danmaku2ass).

## Quick Example

```js
import fs from "fs";
import { generateASS } from "jsr:@biliy-deno/danmaku2ass";

const filename = "example.xml";
const xmlText = fs.readFileSync(filename, "utf-8");
const assText = generateASS(xmlText, { filename, title: "Quick Example" });
fs.writeFileSync(`${filename}.ass`, assText, "utf-8");
```

```js
// default subtitle style
// convert function options.substyle
{
    fontSize: [25, 25, 36],
    fontName: '黑体',
    color: '#ffffff',
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
    block: []
}
```

## LICENSE

MIT
