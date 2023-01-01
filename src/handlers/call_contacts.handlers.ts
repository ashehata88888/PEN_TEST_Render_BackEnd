import { NextFunction, Request, Response } from 'express'
import Call_contactModel from '../models/call_contact.model'

const call_contactModel = new Call_contactModel()

export const createCall_contact= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cc = await call_contactModel.createCall_contact(req.body)
    res.json({
   Message: ` Call_contact '${cc.contact_person}' was created successfully`,
      data: { ...cc }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneCall_contact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cc = await call_contactModel.getOneCall_contact(req.params.id)
    res.json({
      Message: ` Call_contact '${cc.contact_person}' was retrieved successfully`,
      data: { ...cc }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllCall_contacts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ccs = await call_contactModel.getAllCall_contacts()
    res.json({
      Message: ` the call_contacts was retrieved successfully`,
      data: { ...ccs }
    })
  } catch (err) {
    next(err)
  }
}

export const updateCall_contact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cc = await call_contactModel.updateCall_contact(req.body)
    res.json({
      Message: ` '${cc.contact_person}' Call_contact  was updated successfully`,
      data: { ...cc }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteCall_contact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cc = await call_contactModel.deleteCall_contact(req.params.id as unknown as string)
    res.json({
      Message: ` '${cc.contact_person}'  Call_contact was deleted successfully`,
      data: { ...cc }
    })
  } catch (err) {
    next(err)
  }
}
