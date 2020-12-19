"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const fs_1 = require("fs");
const model_sketch = "./models/model.json";
const convert = async (IMAGE_PATH, MODEL_PATH, EXPORT_PATH) => {
    const image = utils_1.preprocess(IMAGE_PATH);
    const model = await utils_1.loadModel(MODEL_PATH);
    const fake = utils_1.predictFromImage(model, image);
    utils_1.saveImage(fake, EXPORT_PATH);
};
(async () => {
    for await (let i of fs_1.readdirSync('./images'))
        convert(`./images/${i}`, model_sketch, `./output/${i}`);
})();
