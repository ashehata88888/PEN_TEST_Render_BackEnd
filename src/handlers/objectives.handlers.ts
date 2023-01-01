import { NextFunction, Request, Response } from 'express'
import ObjectiveModel from '../models/objective.model'

const objectiveModel = new ObjectiveModel()

export const createObjective= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obj = await objectiveModel.createObjective(req.body)
    res.json({
   Message: ` Objective '${obj.objective_name}' was created successfully`,
      data: { ...obj }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneObjective = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obj = await objectiveModel.getOneObjective(req.params.id)
    res.json({
      Message: ` Objective '${obj.objective_name}' was retrieved successfully`,
      data: { ...obj }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllObjectives = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const objs = await objectiveModel.getAllObjectives()
    res.json({
      Message: ` the objectives was retrieved successfully`,
      data: { ...objs }
    })
  } catch (err) {
    next(err)
  }
}

export const updateObjective = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obj = await objectiveModel.updateObjective(req.body)
    res.json({
      Message: ` '${obj.objective_name}' Objective  was updated successfully`,
      data: { ...obj }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteObjective = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obj = await objectiveModel.deleteObjective(req.params.id as unknown as string)
    res.json({
      Message: ` '${obj.objective_name}'  Objective was deleted successfully`,
      data: { ...obj }
    })
  } catch (err) {
    next(err)
  }
}
