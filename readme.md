# TensorflowJS ESRGAN
A [Tensorflow.JS](https://tensorflow.com/js) wrapper of ESRGAN (aka Zoom and Enhance)  based off the [ESRGAN Tensorflow Implementation](https://github.com/captain-pool/GSOC/tree/master/E2_ESRGAN). Made with Typescript, Python, Node.js, and Tensorflow.js.

## What it does
Like the description says, it enhances and upscales images like they do in the movies

## Quickstart
Make sure you have `node.js` installed. You can check this with `node -v`. If you dont have node.js installed, you can install it from [here](https://nodejs.org/en/). In the project directory, create a folder `images`, with images you want to enhance, and `output`, with output images.
```
npm i
npm run build
npm run start
```

## Future Releases
I may end up converting this to work in the browser, in a svelte app. Stay tuned!

## Resources
* https://www.tensorflow.org/hub/tutorials/image_enhancing
* https://tfhub.dev/captain-pool/esrgan-tf2/1
* https://arxiv.org/abs/1809.00219
* https://github.com/captain-pool/GSOC/tree/master/E2_ESRGAN

## License
[MIT](./LICENSE)
