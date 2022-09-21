import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose'

@modelOptions({ options: {allowMixed:0} })

class Brand {
    @prop()
    name: string
}

const BrandModel = getModelForClass(Brand)

export default BrandModel