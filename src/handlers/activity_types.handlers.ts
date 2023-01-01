import { NextFunction, Request, Response } from 'express'
import Activity_typeModel from '../models/activity_type.model'

const activity_typeModel = new Activity_typeModel()

export const createActivity_type= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const actt = await activity_typeModel.createActivity_type(req.body)
    res.json({
   Message: ` Activity_type '${actt.activity_type}' was created successfully`,
      data: { ...actt }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneActivity_type = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const actt = await activity_typeModel.getOneActivity_type(req.params.id)
    res.json({
      Message: ` Activity_type '${actt.activity_type}' was retrieved successfully`,
      data: { ...actt }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllActivity_types = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const actts = await activity_typeModel.getAllActivity_types()
    res.json({
      Message: ` the activity_types was retrieved successfully`,
      data: { ...actts }
    })
  } catch (err) {
    next(err)
  }
}

export const updateActivity_type = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const actt = await activity_typeModel.updateActivity_type(req.body)
    res.json({
      Message: ` '${actt.activity_type}' Activity_type  was updated successfully`,
      data: { ...actt }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteActivity_type = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const actt = await activity_typeModel.deleteActivity_type(req.params.id as unknown as string)
    res.json({
      Message: ` '${actt.activity_type}'  Activity_type was deleted successfully`,
      data: { ...actt }
    })
  } catch (err) {
    next(err)
  }
}
