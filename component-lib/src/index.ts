type TransformHandler = (tag: string) => string;
let transformHandler: TransformHandler = (tag) => tag;
const setTransformHandler = (handler: TransformHandler) => (transformHandler = handler);
const componentLibTagTransformer = (tag) => { return transformHandler(tag); }

export { componentLibTagTransformer, setTransformHandler }
