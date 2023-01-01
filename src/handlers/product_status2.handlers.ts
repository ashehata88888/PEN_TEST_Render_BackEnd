import { NextFunction, Request, Response } from 'express'
import Product_statusModel from '../models/product_status2.model'

const product_statusModel = new Product_statusModel()

export const createProduct_status= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ps = await product_statusModel.createProduct_status(req.body)
    res.json({
   Message: ` Product_status '${ps.product_status_name}' was created successfully`,
      data: { ...ps }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneProduct_status = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ps = await product_statusModel.getOneProduct_status(req.params.id)
    res.json({
      Message: ` Product_status '${ps.product_status_name}' was retrieved successfully`,
      data: { ...ps }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllProduct_statuses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pss = await product_statusModel.getAllProduct_statuss()
    res.json({
      Message: ` the product_status was retrieved successfully`,
      data: { ...pss }
    })
  } catch (err) {
    next(err)
  }
}

export const updateProduct_status = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ps = await product_statusModel.updateProduct_status(req.body)
    res.json({
      Message: ` '${ps.product_status_name}' Product_status  was updated successfully`,
      data: { ...ps }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteProduct_status = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ps = await product_statusModel.deleteProduct_status(req.params.id as unknown as string)
    res.json({
      Message: ` '${ps.product_status_name}'  Product_status was deleted successfully`,
      data: { ...ps }
    })
  } catch (err) {
    next(err)
  }
}
