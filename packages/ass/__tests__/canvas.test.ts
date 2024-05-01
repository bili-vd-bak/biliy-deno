import { measureTextWidth } from "../src/util/layout.ts";
import { assert } from "jsr:@std/assert";
import { assertType,IsExact } from 'jsr:@std/testing/types';

Deno.test("canvas measureTextWidth", () => {
  const text = "一段测试文字";
  const width = measureTextWidth("SimHei", 25, false, text);
  // assertType<number>(width);
  assertType<IsExact<typeof width,number>>(true)
  console.log(width , 25 * text.length)
  assert(width >= 25 * text.length);
});
