import { NextFunction, Request, Response } from 'express'
import BlModel from '../models/bl.model'

const blModel = new BlModel()

export const createBl = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bl = await blModel.createBl(req.body)
    res.json({
      Message: ` BL "${bl.bl_name}" was created successfully`,
      data: { ...bl }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneBl = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bl = await blModel.getOneBl(req.params.id)
    res.json({
      Message: ` Bl "${bl.bl_name}" was retrieved successfully`,
      data: { ...bl }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllBls = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bls = await blModel.getAllBls()
    res.json({
      Message: ` the BLS was retrieved successfully`,
      data: { ...bls }
    })
  } catch (err) {
    next(err)
  }
}

export const updateBl = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bl = await blModel.updateBl(req.body)
    res.json({
      Message: ` "${bl.bl_name}" Bl  was updated successfully`,
      data: { ...bl }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteBl = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bl = await blModel.deleteBl(req.params.id as unknown as string)
    res.json({
      Message: ` Bl "${bl.bl_name}" was deleted successfully`,
      data: { ...bl }
    })
  } catch (err) {
    next(err)
  }
}
