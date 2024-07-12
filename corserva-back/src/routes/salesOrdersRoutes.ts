import express from 'express';
import * as salesOrdersServices from '../services/salesOrdersServices';
//import toNewSaleEntry from '../services/utils';
import {
	createSaleOrderItemSchema,
	updateSaleOrderItemSchema,
} from '../validations/saleOrderItemValidation';
import { validateRequest } from '../middlewares/validationMiddleware';

const router = express.Router();

router.get('/', async (_req, res) => {
	try {
		const saleOrderItems = await salesOrdersServices.getAllSaleOrderItems();
		return res.status(200).json(saleOrderItems);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const saleOrderItem = await salesOrdersServices.getSaleOrderItemById(
			Number(id),
		);
		if (saleOrderItem) {
			return res.json(saleOrderItem);
		} else {
			return res.status(404).send('Sale Order Item not found');
		}
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

router.post(
	'/',
	validateRequest(createSaleOrderItemSchema),
	async (req, res) => {
		try {
			const saleOrderItem = await salesOrdersServices.createSaleOrderItem(
				req.body,
			);
			//console.log(saleOrderItem);
			return res.status(201).json(saleOrderItem);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
);

router.put(
	'/:id',
	validateRequest(updateSaleOrderItemSchema),
	async (req, res) => {
		try {
			const { id } = req.params;
			const updatedSaleOrderItem =
				await salesOrdersServices.updateSaleOrderItem(Number(id), req.body);
			if (!updatedSaleOrderItem) {
				return res.status(404).json({ error: 'Sale Order Item not found' });
			}
			return res.status(200).json(updatedSaleOrderItem);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
);

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		await salesOrdersServices.deleteSaleOrderItem(Number(id));
		return res.status(204).send();
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
});

export default router;
