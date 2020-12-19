"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.predictFromImage = exports.loadModel = exports.saveImage = exports.preprocess = void 0;
const tfjs_node_1 = require("@tensorflow/tfjs-node");
const fs = __importStar(require("fs"));
exports.preprocess = (path) => {
    const image = fs.readFileSync(path);
    const hr_image = tfjs_node_1.node.decodeImage(new Uint8Array(image), 3);
    const castImage = tfjs_node_1.cast(hr_image, 'float32');
    return tfjs_node_1.expandDims(castImage, 0);
};
exports.saveImage = async (image, filePath = "./Super Resolution.png") => {
    const clipped = tfjs_node_1.clipByValue(image.squeeze(), 0, 255);
    const encodedPng = await tfjs_node_1.node.encodePng(clipped);
    fs.writeFileSync(filePath, encodedPng);
    console.log(`Wrote Super Resolution Image to ${filePath}!`);
};
exports.loadModel = async (modelPath) => {
    return await tfjs_node_1.loadGraphModel(tfjs_node_1.io.fileSystem(modelPath));
};
exports.predictFromImage = (model, image) => {
    return model.predict(image);
};
