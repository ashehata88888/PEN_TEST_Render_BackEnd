import { NextFunction, Request, Response } from 'express'
import Market_potentialModel from '../models/market_potential.model'

const market_potentialModel = new Market_potentialModel()

export const createMarket_potential= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mp = await market_potentialModel.createMarket_potential(req.body)
    res.json({
   Message: ` Market_potential '${mp.id}' was created successfully`,
      data: { ...mp }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneMarket_potential = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mp = await market_potentialModel.getOneMarket_potential(req.params.id)
    res.json({
      Message: ` Market_potential '${mp.id}' was retrieved successfully`,
      data: { ...mp }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllMarket_potentials = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mps = await market_potentialModel.getAllMarket_potentials()
    res.json({
      Message: ` the market_potentials was retrieved successfully`,
      data: { ...mps }
    })
  } catch (err) {
    next(err)
  }
}

export const updateMarket_potential = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mp = await market_potentialModel.updateMarket_potential(req.body)
    res.json({
      Message: ` '${mp.id}' Market_potential  was updated successfully`,
      data: { ...mp }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteMarket_potential = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mp = await market_potentialModel.deleteMarket_potential(req.params.id as unknown as string)
    res.json({
      Message: ` '${mp.id}'  Market_potential was deleted successfully`,
      data: { ...mp }
    })
  } catch (err) {
    next(err)
  }
}
