/* eslint-disable @typescript-eslint/no-explicit-any */
import * as salesOrdersServices from '../../services/salesOrdersServices';

describe('getSaleOrderItemById', () => {
	it('should fetch a sale order item by id', async () => {
		const mockSaleOrderItem = {
			id: 1,
			orderId: 111,
			productId: 211,
			quantity: 11,
			unitPrice: 7.5,
			totalPrice: 750,
		};

		// Mockear getSaleOrderItemById function to return mockSaleOrderItem object
		jest
			.spyOn(salesOrdersServices, 'getSaleOrderItemById')
			.mockResolvedValue(mockSaleOrderItem as any);

		// Call the function with specific ID
		const result = await salesOrdersServices.getSaleOrderItemById(1);
		//console.log(result);
		expect(result).toEqual(mockSaleOrderItem);
	});

	it('should fetch all sale order items', async () => {
		const mockSaleOrderItems = [
			{
				id: 1,
				orderId: 101,
				productId: 201,
				quantity: 3,
				unitPrice: 15.5,
				totalPrice: 46.5,
				createdAt: '2023-07-01T10:00:00Z',
				updatedAt: '2023-07-01T10:00:00Z',
			},
			{
				id: 2,
				orderId: 102,
				productId: 202,
				quantity: 5,
				unitPrice: 7.75,
				totalPrice: 38.75,
				createdAt: '2023-07-02T11:00:00Z',
				updatedAt: '2023-07-02T11:00:00Z',
			},
			{
				id: 3,
				orderId: 103,
				productId: 203,
				quantity: 2,
				unitPrice: 25.0,
				totalPrice: 50.0,
				createdAt: '2023-07-03T12:00:00Z',
				updatedAt: '2023-07-03T12:00:00Z',
			},
			{
				id: 4,
				orderId: 104,
				productId: 204,
				quantity: 1,
				unitPrice: 100.0,
				totalPrice: 100.0,
				createdAt: '2023-07-04T13:00:00Z',
				updatedAt: '2023-07-04T13:00:00Z',
			},
			{
				id: 5,
				orderId: 105,
				productId: 205,
				quantity: 10,
				unitPrice: 3.25,
				totalPrice: 32.5,
				createdAt: '2023-07-05T14:00:00Z',
				updatedAt: '2023-07-05T14:00:00Z',
			},
			{
				id: 6,
				orderId: 106,
				productId: 206,
				quantity: 7,
				unitPrice: 12.0,
				totalPrice: 84.0,
				createdAt: '2023-07-06T15:00:00Z',
				updatedAt: '2023-07-06T15:00:00Z',
			},
			{
				id: 7,
				orderId: 107,
				productId: 207,
				quantity: 4,
				unitPrice: 8.5,
				totalPrice: 34.0,
				createdAt: '2023-07-07T16:00:00Z',
				updatedAt: '2023-07-07T16:00:00Z',
			},
			{
				id: 8,
				orderId: 108,
				productId: 208,
				quantity: 6,
				unitPrice: 5.0,
				totalPrice: 30.0,
				createdAt: '2023-07-08T17:00:00Z',
				updatedAt: '2023-07-08T17:00:00Z',
			},
			{
				id: 9,
				orderId: 109,
				productId: 209,
				quantity: 8,
				unitPrice: 2.75,
				totalPrice: 22.0,
				createdAt: '2023-07-09T18:00:00Z',
				updatedAt: '2023-07-09T18:00:00Z',
			},
			{
				id: 10,
				orderId: 110,
				productId: 210,
				quantity: 12,
				unitPrice: 1.5,
				totalPrice: 18.0,
				createdAt: '2023-07-10T19:00:00Z',
				updatedAt: '2023-07-10T19:00:00Z',
			},
		];

		// Mock the getAllSaleOrderItems function to return mockSaleOrderItems object list complete
		jest
			.spyOn(salesOrdersServices, 'getAllSaleOrderItems')
			.mockResolvedValue(mockSaleOrderItems as any);

		// Call the function to return all the objects
		const result = await salesOrdersServices.getAllSaleOrderItems();
		//console.log(result);
		expect(result).toEqual(mockSaleOrderItems);
	});
});
