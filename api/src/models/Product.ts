import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose'

@modelOptions({ options: {allowMixed:0} })

class Product {
    @prop()
    name: string

    @prop()
    description: string

    @prop()
    price: number

    @prop()
    discountPercentage: number

    @prop()
    rating: number

    @prop()
    stock: number

    @prop()
    brand: string

    @prop()
    category: string

    @prop()
    image: string

    @prop()
    gallery: string []
    
    @prop()
    slug: string

    @prop()
    status: string
}

const ProductModel = getModelForClass(Product)

export default ProductModel



