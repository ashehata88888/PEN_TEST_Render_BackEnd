import { NextFunction, Request, Response } from 'express'
import CommentModel from '../models/comment.model'

const commentModel = new CommentModel()

export const createComment= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const com = await commentModel.createComment(req.body)
    res.json({
   Message: ` Comment '${com.comment}' was created successfully`,
      data: { ...com }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const com = await commentModel.getOneComment(req.params.id)
    res.json({
      Message: ` Comment '${com.comment}' was retrieved successfully`,
      data: { ...com }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllComments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const coms = await commentModel.getAllComments()
    res.json({
      Message: ` the comments was retrieved successfully`,
      data: { ...coms }
    })
  } catch (err) {
    next(err)
  }
}

export const updateComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const com = await commentModel.updateComment(req.body)
    res.json({
      Message: ` '${com.comment}' Comment  was updated successfully`,
      data: { ...com }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const com = await commentModel.deleteComment(req.params.id as unknown as string)
    res.json({
      Message: ` '${com.comment}'  Comment was deleted successfully`,
      data: { ...com }
    })
  } catch (err) {
    next(err)
  }
}
