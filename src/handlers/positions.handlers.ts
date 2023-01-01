import { NextFunction, Request, Response } from 'express'
import PositionModel from '../models/position.model'

const positionModel = new PositionModel()

export const createPosition= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const po = await positionModel.createPosition(req.body)
    res.json({
   Message: ` Position '${po.position_name}' was created successfully`,
      data: { ...po }
    })
  } catch (err) {
    next(err)
  }
}

export const getOnePosition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const po = await positionModel.getOnePosition(req.params.id)
    res.json({
      Message: ` Position '${po.position_name}' was retrieved successfully`,
      data: { ...po }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllPositions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pos = await positionModel.getAllPositions()
    res.json({
      Message: ` the positions was retrieved successfully`,
      data: { ...pos }
    })
  } catch (err) {
    next(err)
  }
}

export const updatePosition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const po = await positionModel.updatePosition(req.body)
    res.json({
      Message: ` '${po.position_name}' Position  was updated successfully`,
      data: { ...po }
    })
  } catch (err) {
    next(err)
  }
}

export const deletePosition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const po = await positionModel.deletePosition(req.params.id as unknown as string)
    res.json({
      Message: ` '${po.position_name}'  Position was deleted successfully`,
      data: { ...po }
    })
  } catch (err) {
    next(err)
  }
}