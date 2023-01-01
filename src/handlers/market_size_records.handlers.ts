import { NextFunction, Request, Response } from 'express'
import Market_size_recordModel from '../models/market_size_record.model'

const market_size_recordModel = new Market_size_recordModel()

export const createMarket_size_record= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mzr = await market_size_recordModel.createMarket_size_record(req.body)
    res.json({
   Message: ` Market_size_record '${mzr.id}' was created successfully`,
      data: { ...mzr }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneMarket_size_record = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mzr = await market_size_recordModel.getOneMarket_size_record(req.params.id)
    res.json({
      Message: ` Market_size_record '${mzr.id}' was retrieved successfully`,
      data: { ...mzr }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllMarket_size_records = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mzrs = await market_size_recordModel.getAllMarket_size_records()
    res.json({
      Message: ` the market_size_records was retrieved successfully`,
      data: { ...mzrs }
    })
  } catch (err) {
    next(err)
  }
}

export const updateMarket_size_record = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mzr = await market_size_recordModel.updateMarket_size_record(req.body)
    res.json({
      Message: ` '${mzr.id}' Market_size_record  was updated successfully`,
      data: { ...mzr }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteMarket_size_record = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mzr = await market_size_recordModel.deleteMarket_size_record(req.params.id as unknown as string)
    res.json({
      Message: ` '${mzr.id}'  Market_size_record was deleted successfully`,
      data: { ...mzr }
    })
  } catch (err) {
    next(err)
  }
}
