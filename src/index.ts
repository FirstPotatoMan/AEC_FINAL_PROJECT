//Adaptation of ./python/main.py in typescript

//import helpers
import {preprocess, saveImage, loadModel, predictFromImage} from './utils'
//note that the path should be relative to outside of ./src, since thats where index.ts compiles to
import { readdirSync } from 'fs'


//path to image
// const image = "./images/8c95a7fd-777b-4929-a902-20a810c89e79.jpg"
//model extracted from https://tfhub.dev/captain-pool/esrgan-tf2/1, using TFJS_Convertor Python Package
const model_sketch = "./models/model.json"

const convert = async(IMAGE_PATH:string, MODEL_PATH: string, EXPORT_PATH?: string) => {
    //preprocess image
    const image = preprocess(IMAGE_PATH)
    //load model
    const model = await loadModel(MODEL_PATH)
    //predict upscaled image
    const fake = predictFromImage(model, image)
    //save epscaled image
    saveImage(fake, EXPORT_PATH)
}


;(async()=>{
   for await (let i of readdirSync('./images'))
        convert(`./images/${i}`, model_sketch, `./output/${i}`)
})()


