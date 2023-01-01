import { NextFunction, Request, Response } from 'express'
import PMModel from '../models/purchase_method.model'

const pmModel = new PMModel()

export const createPurchase_Method = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pm = await pmModel.createPurchase_Method(req.body)
    res.json({
      Message: ` Purchase_Method "${pm.purchase_method}" was created successfully`,
      data: { ...pm }
    })
  } catch (err) {
    next(err)
  }
}

export const getOnePurchase_Method = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pm = await pmModel.getOnePurchase_Method(req.params.id)
    res.json({
      Message: ` Purchase_Method "${pm.purchase_method}" was retrieved successfully`,
      data: { ...pm }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllPurchase_Methods = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pms = await pmModel.getAllPurchase_Methods()
    res.json({
      Message: ` the Purchase_Methods was retrieved successfully`,
      data: { ...pms }
    })
  } catch (err) {
    next(err)
  }
}

export const updatePurchase_Method = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pm = await pmModel.updatePurchase_Method(req.body)
    res.json({
      Message: ` "${pm.purchase_method}" Purchase_Method was updated successfully`,
      data: { ...pm }
    })
  } catch (err) {
    next(err)
  }
}

export const deletePurchase_Method = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pm = await pmModel.deletePurchase_Method(req.params.id as unknown as string)
    res.json({
      Message: ` "${pm.purchase_method}" Purchase_Method was deleted successfully`,
      data: { ...pm }
    })
  } catch (err) {
    next(err)
  }
}
