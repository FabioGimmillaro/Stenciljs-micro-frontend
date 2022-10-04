import {setTransformHandler} from "component-lib";
import { defineCustomElements } from 'component-lib/loader';

export default async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */

  const tagTransformer = (tag) => 'main-app-' + tag;
  setTransformHandler(tagTransformer)

  defineCustomElements(window, {
    transformTagName: tagTransformer,
  } as any);
};
