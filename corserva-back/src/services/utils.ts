/* eslint-disable @typescript-eslint/no-explicit-any */
import { newSaleEntry } from './types';

const parseCreatedAt = (createdAtFromRequest: any): string => {
	if (!isString(createdAtFromRequest) || !isDate(createdAtFromRequest)) {
		throw new Error('Incorrect or missing createAt');
	}

	return createdAtFromRequest;
};

const parseUpdatedAt = (updatedAtFromRequest: any): string => {
	if (!isString(updatedAtFromRequest) || !isDate(updatedAtFromRequest)) {
		throw new Error('Incorrect or missing updatedAt');
	}

	return updatedAtFromRequest;
};

const parseOrderId = (orderIdFromRequest: any): number => {
	if (!isNumber(orderIdFromRequest)) {
		throw new Error('Incorrect or missing orderId');
	}

	return orderIdFromRequest;
};

const parseProductId = (productIdFromRequest: any): number => {
	if (!isNumber(productIdFromRequest)) {
		throw new Error('Incorrect or missing productId');
	}

	return productIdFromRequest;
};

const parseUnitPrice = (unitPriceFromRequest: any): number => {
	if (!isNumber(unitPriceFromRequest)) {
		throw new Error('Incorrect or missing productId');
	}

	return unitPriceFromRequest;
};

const parseTotalPrice = (totalFromRequest: any): number => {
	if (!isNumber(totalFromRequest)) {
		throw new Error('Incorrect or missing productId');
	}

	return totalFromRequest;
};

/*
	totalPrice: number;
*/
const parseQuantity = (quantityFromRequest: any): number => {
	if (!isNumber(quantityFromRequest)) {
		throw new Error('Incorrect or missing productId');
	}

	return quantityFromRequest;
};

const isString = (string: string): boolean => {
	return typeof string === 'string';
};

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date));
};

const isNumber = (number: number): boolean => {
	return typeof number === 'number';
};

const toNewSaleEntry = (object: any): newSaleEntry => {
	const newSale: newSaleEntry = {
		orderId: parseOrderId(object.orderId),
		productId: parseProductId(object.productId),
		quantity: parseQuantity(object.quantity),
		unitPrice: parseUnitPrice(object.unitPrice),
		totalPrice: parseTotalPrice(object.totalPrice),
		createdAt: parseCreatedAt(object.createdAt),
		updatedAt: parseUpdatedAt(object.updatedAt),
	};

	return newSale;
};

export default toNewSaleEntry;
