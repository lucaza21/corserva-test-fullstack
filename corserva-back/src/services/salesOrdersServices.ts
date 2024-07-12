/* eslint-disable @typescript-eslint/no-explicit-any */

import { SaleOrderItem } from '../models/SaleOrderItem';

export const getAllSaleOrderItems = async (): Promise<any[]> => {
	try {
		const saleOrderItems = await SaleOrderItem.findAll();
		return saleOrderItems;
	} catch (error) {
		throw new Error(`Failed to fetch Sale Order Items: ${error.message}`);
	}
};

export const getSaleOrderItemById = async (id: number): Promise<any | null> => {
	try {
		const saleOrderItem = await SaleOrderItem.findByPk(id);
		return saleOrderItem;
	} catch (error) {
		throw new Error(`Failed to fetch Sale Order Item: ${error.message}`);
	}
};

export const createSaleOrderItem = async (data: any): Promise<any> => {
	try {
		const { id, orderId, productId, quantity, unitPrice, totalPrice } = data;

		const saleOrderItem = await SaleOrderItem.create({
			id,
			orderId,
			productId,
			quantity,
			unitPrice,
			totalPrice,
		});
		return saleOrderItem;
	} catch (error) {
		throw new Error(`Failed to create Sale Order Item: ${error.message}`);
	}
};

export const updateSaleOrderItem = async (
	id: number,
	data: any,
): Promise<any | null> => {
	try {
		const saleOrderItem = await SaleOrderItem.findByPk(id);
		if (!saleOrderItem) {
			throw new Error(`Sale Order Item with id ${id} not found`);
		}

		const updatedSaleOrderItem = await saleOrderItem.update(data);
		return updatedSaleOrderItem;
	} catch (error) {
		throw new Error(`Failed to update Sale Order Item: ${error.message}`);
	}
};

export const deleteSaleOrderItem = async (id: number): Promise<void> => {
	try {
		const saleOrderItem = await SaleOrderItem.findByPk(id);
		if (saleOrderItem) {
			await saleOrderItem.destroy();
		}
	} catch (error) {
		throw new Error(`Failed to delete Sale Order Item: ${error.message}`);
	}
};
