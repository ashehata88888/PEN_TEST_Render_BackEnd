import { NextFunction, Request, Response } from 'express'
import ItemGroupModel from '../models/item_group.model'

const item_groupModel = new ItemGroupModel()

export const createItem_group = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ig = await item_groupModel.createItem_group(req.body)
    res.json({
      Message: ` Item_group "${ig.item_group}" was created successfully`,
      data: { ...ig }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneItem_group = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ig = await item_groupModel.getOneItem_group(req.params.id)
    res.json({
      Message: ` item_group "${ig.item_group}" was retrieved successfully`,
      data: { ...ig }
    })
  } catch (err) {
    next(err)
  }
}


export const getAllItem_groupByPFID = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ig = await item_groupModel.getAllItem_groupByPFID(req.params.id)
    res.json([
      // Message: ` item_group was retrieved successfully`,
   ...ig 
    ])
  } catch (err) {
    next(err)
  }
}

export const getAllItem_groups = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const igs = await item_groupModel.getAllItem_groups()
    res.json({
      Message: ` the item_groups was retrieved successfully`,
      data: { ...igs }
    })
  } catch (err) {
    next(err)
  }
}

export const updateItem_group = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ig = await item_groupModel.updateItem_group(req.body)
    res.json({
      Message: ` "${ig.item_group}" item_group  was updated successfully`,
      data: { ...ig }
    })
  } catch (err) {
    next(err)
  }
}

export const deleteItem_group = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ig = await item_groupModel.deleteItem_group(req.params.id as unknown as string)
    res.json({
      Message: ` item_group "${ig.item_group}" was deleted successfully`,
      data: { ...ig }
    })
  } catch (err) {
    next(err)
  }
}
