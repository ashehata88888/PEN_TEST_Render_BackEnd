import { NextFunction, Request, Response } from 'express'
import SupplierModel from '../models/supplier.model'


const supModel = new SupplierModel()

export const createSup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sup = await supModel.createSup(req.body)
    res.json({
      Message: ` Supplier "${sup.supplier_name}" was created successfully`,
      data: { ...sup }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneSup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sup = await supModel.getOneSup(req.params.id)
    res.json({
      Message: ` Supplier "${sup.supplier_name}" was retrieved successfully`,
      data: { ...sup }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllSuppliersByBLId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sup = await supModel.getAllSuppliersByBLId(req.params.id)
    res.json([...sup
      // Message: ` the supplier Names was retrieved successfully`,
      // data: { ...ac }
    ])
  } catch (err) {
    next(err)
  }
}

export const getAllSups = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sups = await supModel.getAllSups()
    res.json({
      Message: ` the suppliers was retrieved successfully`,
      data: { ...sups }
    })
  } catch (err) {
    next(err)
  }
}

export const updateSup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sup = await supModel.updateSup(req.body)
    res.json({
      Message: ` "${sup.supplier_name}" supplier  was updated successfully`,
      data: { ...sup }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteSup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sup = await supModel.deleteSup(req.params.id as unknown as string)
    res.json({
      Message: `"${sup.supplier_name}" supplier was deleted successfully`,
      data: { ...sup }
    })
  } catch (err) {
    next(err)
  }
}
