import { NextFunction, Request, Response } from 'express'
import Account_Type_Model from '../models/account_type.model'

const atModel = new Account_Type_Model()

export const createAccount_Type = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const at = await atModel.createAccount_typet(req.body)
    res.json({
      Message: ` account "${at.account_type}" was created successfully`,
      data: { ...at }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneAccount_Type = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const at = await atModel.getOneAccount_type(req.params.id)
    res.json({
      Message: ` account_Type "${at.account_type}" was retrieved successfully`,
      data: { ...at }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllAccount_Types = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const at = await atModel.getAllAccount_types()
    res.json({
      Message: ` the account_types was retrieved successfully`,
      data: { ...at }
    })
  } catch (err) {
    next(err)
  }
}

export const updateAccount_Type = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const at = await atModel.updateAccount_type(req.body)
    res.json({
      Message: ` "${at.account_type}" account_type  was updated successfully`,
      data: { ...at }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteAccount_Type = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const at = await atModel.deleteAccount_type(req.params.id)
    res.json({
      Message: `"${at.account_type}" Account_type was deleted successfully`,
      data: { ...at }
    })
  } catch (err) {
    next(err)
  }
}
