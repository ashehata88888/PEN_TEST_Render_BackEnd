import { NextFunction, Request, Response } from 'express'
import SpecialityModel from '../models/speciality.model'

const specialityModel = new SpecialityModel()

export const createSpeciality= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sp = await specialityModel.createSpeciality(req.body)
    res.json({
   Message: ` Speciality '${sp.speciality_name}' was created successfully`,
      data: { ...sp }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneSpeciality = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sp = await specialityModel.getOneSpeciality(req.params.id)
    res.json({
      Message: ` Speciality '${sp.speciality_name}' was retrieved successfully`,
      data: { ...sp }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllSpecialitys = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sps = await specialityModel.getAllSpecialitys()
    res.json({
      Message: ` the specialities was retrieved successfully`,
      data: { ...sps }
    })
  } catch (err) {
    next(err)
  }
}

export const updateSpeciality = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sp = await specialityModel.updateSpeciality(req.body)
    res.json({
      Message: ` '${sp.speciality_name}' Speciality  was updated successfully`,
      data: { ...sp }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteSpeciality = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sp = await specialityModel.deleteSpeciality(req.params.id as unknown as string)
    res.json({
      Message: ` '${sp.speciality_name}'  Speciality was deleted successfully`,
      data: { ...sp }
    })
  } catch (err) {
    next(err)
  }
}
