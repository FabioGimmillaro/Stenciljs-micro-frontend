// import { h as a } from "@stencil/core";
// import {transformTag} from "./query.util";

/*export function h(...args: any[]): ReturnType<typeof a> {
  const tagName = args[0];

  let newTagName = tagName;
  if(typeof tagName === "string") {
    newTagName = transformTag(tagName);
  }

  const arr = args.slice(2);
  const tuple = [newTagName, args[1], arr] as const;

  return a(...tuple);
}*/
