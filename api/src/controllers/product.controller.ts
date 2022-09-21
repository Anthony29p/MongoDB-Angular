import { RequestHandler } from "express"

import ProductModel from "../models/Product";


export const createProduct:RequestHandler = async (req,res) => {
    const product = new ProductModel(req.body)
    const newProduct = await product.save();

    res.status(200).json(newProduct) 
}

export const getProduct:RequestHandler = async (req,res) => {
    const productList = await ProductModel.find({},{_id:0,__v:0})

    res.status(200).json(productList)
}
