export interface SaleEntry {
	id: number;
	orderId: number;
	productId: number;
	quantity: number;
	unitPrice: number;
	totalPrice: number;
	createdAt: string;
	updatedAt: string;
}

//export type Nonsensitive = Pick<SaleEntry, 'id' | orderId>

export type Nonsensitive = Omit<SaleEntry, 'unitPrice'>;

export type newSaleEntry = Omit<SaleEntry, 'id'>;
