import { NextFunction, Request, Response } from 'express'
import CompetitorModel from '../models/competitor.model'


const compModel = new CompetitorModel()

export const createCompetitor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comp = await compModel.createCompetitor(req.body)
    res.json({
      Message: ` Competitor "${comp.competitor_name}" was created successfully`,
      data: { ...comp }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneCompetitor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comp = await compModel.getOneCompetitor(req.params.id)
    res.json({
      Message: ` Competitor "${comp.competitor_name}" was retrieved successfully`,
      data: { ...comp }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllCompetitors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comps = await compModel.getAllCompetitors()
    res.json({
      Message: ` the CompetitorS was retrieved successfully`,
      data: { ...comps }
    })
  } catch (err) {
    next(err)
  }
}

// req.query.id1 as unknown as number, req.params.id2 as unknown as number

export const getAllCompetitorsPerBLSupller = async (req: Request, res: Response, next: NextFunction) => {
  try {
 
    const comps = await compModel.getAllCompetitorsPerBLSupller(req.params.bl_id,req.params.supplier_id)
    // console.log('comps are ,,,,,',comps)
    
    res.json({data:[
      // Message: ` item_group was retrieved successfully`,
   ...comps 
  ] })
  } catch (err) {
    next(err)
  }
}

export const updateCompetitor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comp = await compModel.updateCompetitor(req.body)
    res.json({
      Message: ` "${comp.competitor_name}" Competitor  was updated successfully`,
      data: { ...comp }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteCompetitor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comp = await compModel.deleteCompetitor(req.params.id as unknown as string)
    res.json({
      Message: ` Competitor "${comp.competitor_name}" was deleted successfully`,
      data: { ...comp }
    })
  } catch (err) {
    next(err)
  }
}
