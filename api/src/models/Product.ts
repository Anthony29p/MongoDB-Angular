import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose'

@modelOptions({ options: {allowMixed:0} })

class Product {
    @prop()
    name: string

    @prop()
    category: string

    @prop()
    brand: string

    @prop()
    slug: string

    @prop()
    status: string
}

const ProductModel = getModelForClass(Product)

export default ProductModel



