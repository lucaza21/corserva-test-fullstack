import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

interface SaleOrderItemAttributes {
	id: number;
	orderId: number;
	productId: number;
	quantity: number;
	unitPrice: number;
	totalPrice: number;
	createdAt?: Date;
	updatedAt?: Date;
}

class SaleOrderItem
	extends Model<SaleOrderItemAttributes>
	implements SaleOrderItemAttributes
{
	public id!: number;
	public orderId!: number;
	public productId!: number;
	public quantity!: number;
	public unitPrice!: number;
	public totalPrice!: number;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

SaleOrderItem.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		orderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		unitPrice: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		totalPrice: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'SaleOrderItem',
		tableName: 'SaleOrderItem',
		timestamps: true,
	},
);

export { SaleOrderItem };
