import { NextFunction, Request, Response } from 'express'
import ProductModel from '../models/product.model'

const productModel = new ProductModel()

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productModel.createProduct(req.body)
    res.json({
      Message: ` Product "${product.item_name}" was created successfully`,
      data: { ...product }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productModel.getOneProduct(req.params.id)
    res.json({
      Message: ` Product "${product.item_name}" was retrieved successfully`,
      data: { ...product }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await productModel.getAllProducts()
    res.json({
      Message: ` the products was retrieved successfully`,
      data: { ...products }
    })
  } catch (err) {
    next(err)
  }
}

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productModel.updateProduct(req.body)
    res.json({
      Message: `the product was updated successfully`,
      data: product
    })
  } catch (err) {
    next(err)
  }
}

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productModel.deleteProduct(req.params.id as unknown as string)
    res.json({
      Message: ` product "${product.item_name}" was deleted successfully`,
      data: { ...product }
    })
  } catch (err) {
    next(err)
  }
}
