import { NextFunction, Request, Response } from 'express'
import Call_productModel from '../models/call_product.model'

const call_productModel = new Call_productModel()

export const createCall_product= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cp = await call_productModel.createCall_product(req.body)
    res.json({
   Message: ` Call_product '${cp.id}' was created successfully`,
      data: { ...cp }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneCall_product = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cp = await call_productModel.getOneCall_product(req.params.id)
    res.json({
      Message: ` Call_product '${cp.id}' was retrieved successfully`,
      data: { ...cp }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllCall_products = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cps = await call_productModel.getAllCall_products()
    res.json({
      Message: ` the call_products was retrieved successfully`,
      data: { ...cps }
    })
  } catch (err) {
    next(err)
  }
}

export const updateCall_product = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cp = await call_productModel.updateCall_product(req.body)
    res.json({
      Message: ` '${cp.id}' Call_product  was updated successfully`,
      data: { ...cp }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteCall_product = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cp = await call_productModel.deleteCall_product(req.params.id as unknown as string)
    res.json({
      Message: ` '${cp.id}'  Call_product was deleted successfully`,
      data: { ...cp }
    })
  } catch (err) {
    next(err)
  }
}
