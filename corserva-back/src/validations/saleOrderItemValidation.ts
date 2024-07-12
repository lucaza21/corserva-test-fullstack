import Joi from 'joi';

export const createSaleOrderItemSchema = Joi.object({
	orderId: Joi.number().optional(),
	productId: Joi.number().required(),
	quantity: Joi.number().integer().min(1).required(),
	unitPrice: Joi.number().min(0).required(),
	totalPrice: Joi.number().min(0).required(),
});

export const updateSaleOrderItemSchema = Joi.object({
	orderId: Joi.number().optional(),
	productId: Joi.number().optional(),
	quantity: Joi.number().integer().min(1).optional(),
	unitPrice: Joi.number().min(0).optional(),
	totalPrice: Joi.number().min(0).optional(),
});
