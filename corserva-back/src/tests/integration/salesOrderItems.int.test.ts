import request from 'supertest';
import app from '../../index';
import { sequelize } from '../../database';

beforeAll(async () => {
	await sequelize.sync({ force: true });
}, 20000);

describe('Sales Order Items API', () => {
	it('should create a new sale order item', async () => {
		const newSaleOrderItem = {
			orderId: 111,
			productId: 211,
			quantity: 11,
			unitPrice: 7.5,
			totalPrice: 750,
		};

		const response = await request(app)
			.post('/api/sales')
			.send(newSaleOrderItem)
			.expect(201);

		expect(response.body).toHaveProperty('id');
		expect(response.body.orderId).toBe(newSaleOrderItem.orderId);
		expect(response.body.productId).toBe(newSaleOrderItem.productId);
		expect(response.body.quantity).toBe(newSaleOrderItem.quantity);
		expect(response.body.unitPrice).toBe(newSaleOrderItem.unitPrice);
		expect(response.body.totalPrice).toBe(newSaleOrderItem.totalPrice);
	});

	it('should fetch a sale order item by id', async () => {
		const response = await request(app).get('/api/sales/1').expect(200);

		expect(response.body).toHaveProperty('id', 1);
		expect(response.body).toHaveProperty('orderId');
		expect(response.body).toHaveProperty('productId');
		expect(response.body).toHaveProperty('quantity');
		expect(response.body).toHaveProperty('unitPrice');
		expect(response.body).toHaveProperty('totalPrice');
	});

	it('should update a sale order item by id', async () => {
		const newSaleOrderItem = {
			orderId: 111,
			productId: 211,
			quantity: 11,
			unitPrice: 7.5,
			totalPrice: 750,
		};

		const createResponse = await request(app)
			.post('/api/sales')
			.send(newSaleOrderItem)
			.expect(201);

		const createdItemId = createResponse.body.id;

		const updatedSaleOrderItem = {
			quantity: 20,
			unitPrice: 10.5,
			totalPrice: 210,
		};

		const response = await request(app)
			.put(`/api/sales/${createdItemId}`)
			.send(updatedSaleOrderItem)
			.expect(200);

		expect(response.body.quantity).toBe(updatedSaleOrderItem.quantity);
		expect(response.body.unitPrice).toBe(updatedSaleOrderItem.unitPrice);
		expect(response.body.totalPrice).toBe(updatedSaleOrderItem.totalPrice);
	});

	it('should delete a sale order item by id', async () => {
		await request(app).delete('/api/sales/1').expect(204);

		await request(app).get('/api/sales/1').expect(404);
	});
});

afterAll(async () => {
	await sequelize.close();
});
