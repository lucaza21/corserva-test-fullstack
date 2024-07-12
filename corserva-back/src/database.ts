// src/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
	database: 'database_development',
	username: 'root',
	password: 'root',
	host: 'db',
	port: 5432,
	dialect: 'postgres',
	//logging: false,
});

export { sequelize };
