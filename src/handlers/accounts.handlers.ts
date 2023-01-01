import { NextFunction, Request, Response } from 'express'
import AccountModel from '../models/accounts.model'

const accountModel = new AccountModel()

export const createAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ac = await accountModel.createAccount(req.body)
    res.json({
      Message: ` account "${ac.account_name}" was created successfully`,
      data: { ...ac }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ac = await accountModel.getOneAccount(req.params.id)
    res.json({
      Message: ` account "${ac.account_name}" was retrieved successfully`,
      data: { ...ac }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllAccountNamesForOneUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ac = await accountModel.getAllAccountNamesForOneUser(req.params.id)
    res.json([...ac
      // Message: ` the account Names was retrieved successfully`,
      // data: { ...ac }
    ])
  } catch (err) {
    next(err)
  }
}

export const getAllAccounts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const acs = await accountModel.getAllAccounts()
    res.json({
      Message: ` the accounts was retrieved successfully`,
      data: { ...acs }
    })
  } catch (err) {
    next(err)
  }
}

export const updateAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ac = await accountModel.updateAccount(req.body)
    res.json({
      Message: ` "${ac.account_name}" account  was updated successfully`,
      data: { ...ac }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ac = await accountModel.deleteAccount(req.params.id as unknown as string)
    res.json({
      Message: `"${ac.account_name}" Account was deleted successfully`,
      data: { ...ac }
    })
  } catch (err) {
    next(err)
  }
}
