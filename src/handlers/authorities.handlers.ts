import { NextFunction, Request, Response } from 'express'
import AuthorityModel from '../models/authority.model'

const authorityModel = new AuthorityModel()

export const createAuthority= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Auth = await authorityModel.createAuthority(req.body)
    res.json({
   Message: ` Authority '${Auth.authority_name}' was created successfully`,
      data: { ...Auth }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneAuthority = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Auth = await authorityModel.getOneAuthority(req.params.id)
    res.json({
      Message: ` Authority '${Auth.authority_name}' was retrieved successfully`,
      data: { ...Auth }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllAuthoritys = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Auths = await authorityModel.getAllAuthoritys()
    res.json({
      Message: ` the authorities was retrieved successfully`,
      data: { ...Auths }
    })
  } catch (err) {
    next(err)
  }
}

export const updateAuthority = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Auth = await authorityModel.updateAuthority(req.body)
    res.json({
      Message: ` '${Auth.authority_name}' Authority  was updated successfully`,
      data: { ...Auth }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteAuthority = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Auth = await authorityModel.deleteAuthority(req.params.id as unknown as string)
    res.json({
      Message: ` '${Auth.authority_name}'  Authority was deleted successfully`,
      data: { ...Auth }
    })
  } catch (err) {
    next(err)
  }
}
