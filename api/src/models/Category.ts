import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose'

@modelOptions({ options: {allowMixed:0} })

class Category {
    @prop()
    name: string
}

const CategoryModel = getModelForClass(Category)

export default CategoryModel

