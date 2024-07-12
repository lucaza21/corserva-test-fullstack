/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateRequest = (schema: Joi.ObjectSchema<any>) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const validatedBody = await schema.validateAsync(req.body);
			req.body = validatedBody;
			next();
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	};
};
