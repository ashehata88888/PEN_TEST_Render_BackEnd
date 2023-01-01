import { NextFunction, Request, Response } from 'express'
import StatusModel from '../models/status.model'

const statusModel = new StatusModel()

export const createStatus= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const st = await statusModel.createStatus(req.body)
    res.json({
   Message: ` Status '${st.status_name}' was created successfully`,
      data: { ...st }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const st = await statusModel.getOneStatus(req.params.id)
    res.json({
      Message: ` Status '${st.status_name}' was retrieved successfully`,
      data: { ...st }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllStatuss = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sts = await statusModel.getAllStatuss()
    res.json({
      Message: ` the statuses was retrieved successfully`,
      data: { ...sts }
    })
  } catch (err) {
    next(err)
  }
}

export const updateStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const st = await statusModel.updateStatus(req.body)
    res.json({
      Message: ` '${st.status_name}' Status  was updated successfully`,
      data: { ...st }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const st = await statusModel.deleteStatus(req.params.id as unknown as string)
    res.json({
      Message: ` '${st.status_name}'  Status was deleted successfully`,
      data: { ...st }
    })
  } catch (err) {
    next(err)
  }
}
