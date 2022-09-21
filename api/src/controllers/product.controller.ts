import axios from "axios";
import { RequestHandler } from "express"
import BrandModel from "../models/Brand";
import CategoryModel from "../models/Category";

import ProductModel from "../models/Product";

export const getProduct:RequestHandler = async (req,res) => {
    const productList = await ProductModel.find({},{_id:0,__v:0})

    res.status(200).json(productList)
}

export const createProduct:RequestHandler = async (req,res) => {
    const product = new ProductModel(req.body)
    const newProduct = await product.save();

    res.status(200).json(newProduct) 
}

// Use only the first time
export const uploadProducts:RequestHandler = async (req,res) => {
    const products = await axios.get('https://dummyjson.com/products',{
        headers:{
            'Content-type':'application/json'
        }
    })

    const productFiltered = await products.data.products.map(async (e:any) =>{
        
        // await BrandModel.create({brand : e.brand,})
        
        // await CategoryModel.create({category : e.category,})

        // const categoryID = BrandModel.find({brand : e.brand,}


        const product = new ProductModel({
                name : e.title,
                description : e.description,
                price:e.price,
                discountPercentage : e.discountPercentage,
                rating : e.rating,
                stock : e.stock,
                brand : e.brand,
                category : e.category,
                image : e.thumbnail,
                gallery: e.images,
                status:["new","used"][Math.round(Math.random())]
        })

        const newProduct = await product.save();
    })

    // ProductModel.insertMany(productFiltered)

    res.status(200).json('Products uploaded correctly') 
}