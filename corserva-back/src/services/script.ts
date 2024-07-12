import * as fs from 'fs/promises';
import { sequelize } from '../database';
import { SaleOrderItem } from '../models/SaleOrderItem';

async function populateDatabase() {
	const jsonData = await fs.readFile('./salesOrders.json', 'utf-8');
	const saleOrderItemsData = JSON.parse(jsonData);

	try {
		await sequelize.sync();

		await SaleOrderItem.bulkCreate(saleOrderItemsData);

		console.log('Datos insertados correctamente en la base de datos.');
	} catch (error) {
		console.error('Error al insertar datos:', error);
	} finally {
		await sequelize.close();
	}
}

populateDatabase();
