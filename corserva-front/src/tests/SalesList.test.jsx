import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import SalesList from '../components/SalesList/SalesList';
import { deleteItem } from '../../services/api';


// Mock de funciones o servicios necesarios
vi.mock('../../services/api', () => ({
  deleteItem: vi.fn().mockResolvedValue({}),
}));

const salesOrdersItems = [
  {
    id: 1,
    orderId: '12345',
    productId: '67890',
    quantity: 1,
    unitPrice: 100,
    totalPrice: 100,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-02',
  },
];

const fetchItems = vi.fn();
const onEditSalesClick = vi.fn();

describe('SalesList component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders SalesList component with sales items', () => {
    render(
      <SalesList
        salesOrdersItems={salesOrdersItems}
        fetchItems={fetchItems}
        onEditSalesClick={onEditSalesClick}
      />
    );

    // Verificar que los botones de acción estén presentes
    const actionButtons = screen.getAllByRole('button');
    expect(actionButtons.length).toBeGreaterThan(0);
  });

  it('calls deleteItem function when delete button is clicked', async () => {
    render(
      <SalesList
        salesOrdersItems={salesOrdersItems}
        fetchItems={fetchItems}
        onEditSalesClick={onEditSalesClick}
      />
    );

    const deleteButton = screen.getAllByLabelText('Delete')[0];
    fireEvent.click(deleteButton);

    // Esperar a que se llame a la función deleteItem
    expect(deleteItem).toHaveBeenCalledWith(salesOrdersItems[0].id);
  });

  it('opens modal with sale data when eye button is clicked', () => {
    render(
      <SalesList
        salesOrdersItems={salesOrdersItems}
        fetchItems={fetchItems}
        onEditSalesClick={onEditSalesClick}
      />
    );

    const eyeButton = screen.getAllByLabelText('View')[0];
    fireEvent.click(eyeButton);

  });

  it('calls onEditSalesClick when edit button is clicked', () => {
    render(
      <SalesList
        salesOrdersItems={salesOrdersItems}
        fetchItems={fetchItems}
        onEditSalesClick={onEditSalesClick}
      />
    );

    const editButton = screen.getAllByLabelText('Edit')[0];
    fireEvent.click(editButton);

    // Verificar que se llamó a la función onEditSalesClick con los datos correctos
    expect(onEditSalesClick).toHaveBeenCalledWith(salesOrdersItems[0]);
  });
});
