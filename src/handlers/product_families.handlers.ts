import { NextFunction, Request, Response } from 'express'
import PFModel from '../models/product_family.model'

const pfModel = new PFModel()

export const createPF = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bf = await pfModel.createPF(req.body)
    res.json({
      Message: ` product Family "${bf.product_family}" was created successfully`,
      data: { ...bf }
    })
  } catch (err) {
    next(err)
  }
}

export const getOnePF = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pf = await pfModel.getOnePF(req.params.id)
    res.json({
      Message: ` product family "${pf.product_family}" was retrieved successfully`,
      data: { ...pf }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllPFBySupId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pf = await pfModel.getAllPFBySupId(req.params.id)
    res.json([
      // Message: ` product family was retrieved successfully`,
     ...pf 
    ])
  } catch (err) {
    next(err)
  }
}

export const getAllPFsBySupID = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sup = await pfModel.getAllPFBySupId(req.params.id)
    res.json([...sup
      // Message: ` the supplier Names was retrieved successfully`,
      // data: { ...ac }
    ])
  } catch (err) {
    next(err)
  }
}

export const getAllPFs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pfs = await pfModel.getAllPFs()
    res.json({
      Message: ` the Product Family was retrieved successfully`,
      data: { ...pfs }
    })
  } catch (err) {
    next(err)
  }
}



export const updatePF = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pf = await pfModel.updatePF(req.body)
    res.json({
      Message: ` ${pf} product Family  was updated successfully`,
      data: { ...pf }
    })
    console.log(JSON.stringify(pf))
  } catch (err) {
    next(err)
  }
}

export const deletePF = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pf = await pfModel.deletePF(req.params.id as unknown as string)
    res.json({
      Message: ` product family "${pf.product_family}" was deleted successfully`,
      data: { ...pf }
    })
  } catch (err) {
    next(err)
  }
}
