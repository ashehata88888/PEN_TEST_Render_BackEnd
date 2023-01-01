import { NextFunction, Request, Response } from 'express'
import BuModel from '../models/bu.model'


const buModel = new BuModel()

export const createBu = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bu = await buModel.createBu(req.body)
    res.json({
      Message: ` BU "${bu.bu_name}" was created successfully`,
      data: { ...bu }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneBu = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bu = await buModel.getOneBu(req.params.id)
    res.json({
      Message: ` BU "${bu.bu_name}" was retrieved successfully`,
      data: { ...bu }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllBus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bus = await buModel.getAllBus()
    res.json({
      Message: ` the BUS was retrieved successfully`,
      data: { ...bus }
    })
  } catch (err) {
    next(err)
  }
}

export const updateBu = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bu = await buModel.updateBu(req.body)
    res.json({
      Message: ` the BU number "${bu.bu_name}" was updated successfully`,
      data: { ...bu }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteBu = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bu = await buModel.deleteBu(req.params.id as unknown as string)
    res.json({
      Message: ` BU "${bu.bu_name}" was deleted successfully`,
      data: { ...bu }
    })
  } catch (err) {
    next(err)
  }
}
