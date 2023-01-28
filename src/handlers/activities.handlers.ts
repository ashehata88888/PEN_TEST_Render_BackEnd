import { NextFunction, Request, Response } from 'express'
import ActivityModel from '../models/activities.model'

const activityModel = new ActivityModel()

export const createActivity= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const act = await activityModel.createActivity(req.body)
    res.json({
   Message: ` Activity '${act.activity_type_id}' was created successfully`,
      data: { ...act }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const act = await activityModel.getOneActivity(req.params.id)
    res.json({
      Message: ` Activity '${act.activity_type_id}' was retrieved successfully`,
      data: { ...act }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllActivityforSuperUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ac = await activityModel.getAllActivityforSuperUser()
    res.json([...ac
      // Message: ` the account Names was retrieved successfully`,
      // data: { ...ac }
    ])
  } catch (err) {
    next(err)
  }
}



export const getAllActivityforOneUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ac = await activityModel.getAllActivityforOneUserId(req.params.id)
      res.json([...ac
        // Message: ` the account Names was retrieved successfully`,
        // data: { ...ac }
      ])
    } catch (err) {
      next(err)
    }
  }

export const getAllActivitys = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const acts = await activityModel.getAllActivitys()
    res.json({
      Message: ` the Activities was retrieved successfully`,
      data: { ...acts }
    })
  } catch (err) {
    next(err)
  }
}

export const updateActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const act = await activityModel.updateActivity(req.body)
    res.json({
      Message: ` '${act.activity_type_id}' Activity  was updated successfully`,
      data: { ...act }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const act = await activityModel.deleteActivity(req.params.id as unknown as string)
    res.json({
      Message: ` '${req.params.id}'  Activity was deleted successfully`,
      data: { ...act }
    })
  } catch (err) {
    next(err)
  }
}
