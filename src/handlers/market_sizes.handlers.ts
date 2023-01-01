import { NextFunction, Request, Response } from 'express'
import Market_sizeModel from '../models/market_size.model'

const market_sizeModel = new Market_sizeModel()

export const createMarket_size= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mz = await market_sizeModel.createMarket_size(req.body)
    res.json({
   Message: ` Market_size '${mz.id}' was created successfully`,
      data: { ...mz }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneMarket_size = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mz = await market_sizeModel.getOneMarket_size(req.params.id)
    res.json({
      Message: ` Market_size '${mz.id}' was retrieved successfully`,
      data: { ...mz }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllMarket_sizes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mzs = await market_sizeModel.getAllMarket_sizes()
    res.json({
      Message: ` the market_size was retrieved successfully`,
      data: { ...mzs }
    })
  } catch (err) {
    next(err)
  }
}

export const updateMarket_size = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mz = await market_sizeModel.updateMarket_size(req.body)
    res.json({
      Message: ` '${mz.id}' Market_size  was updated successfully`,
      data: { ...mz }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteMarket_size = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mz = await market_sizeModel.deleteMarket_size(req.params.id as unknown as string)
    res.json({
      Message: ` '${mz.id}'  Market_size was deleted successfully`,
      data: { ...mz }
    })
  } catch (err) {
    next(err)
  }
}
