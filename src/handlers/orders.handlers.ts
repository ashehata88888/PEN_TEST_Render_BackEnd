import { NextFunction, Request, Response } from 'express'
import OrderModel from '../models/order.model'

const orderModel = new OrderModel()

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderModel.createOrder(req.body)
    res.json({
      Message: ` order "${order.id}" was created successfully`,
      data: { ...order }
    })
  } catch (err) {
    next(err)
  }
}

export const getOneOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderModel.getOneOrder(req.params.id)
    res.json({
      Message: ` order "${order.id}" was retrieved successfully`,
      data: { ...order }
    })
  } catch (err) {
    next(err)
  }
}

export const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await orderModel.getAllOrders()
    res.json({
      Message: ` the products was retrieved successfully`,
      data: { ...orders }
    })
  } catch (err) {
    next(err)
  }
}

export const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await orderModel.updateOrder(req.body)
    res.json({
      Message: `the order was updated successfully`,
      data: product
    })
  } catch (err) {
    next(err)
  }
}

export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderModel.deleteOrder(req.params.id as unknown as string)
    res.json({
      Message: ` order "${order.id}" was deleted successfully`,
      data: { ...order }
    })
  } catch (err) {
    next(err)
  }
}

export const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderId: string = req.params.id
    const productId: string = req.body.product_id
    const quantity: number = parseInt(req.body.quantity)
    const AddPro = await orderModel.addProduct(quantity, orderId, productId)
    res.json({
      Message: ` the Product was successfully added to the order `,
      data: { ...AddPro }
    })
  } catch (err) {
    next(err)
  }
}
