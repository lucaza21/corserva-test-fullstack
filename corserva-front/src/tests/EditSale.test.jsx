import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import EditSale from '../components/EditSale/EditSale';
import { updateItem } from '../../services/api';


// Mock de funciones o servicios necesarios
vi.mock('../../services/api', () => ({
  updateItem: vi.fn().mockResolvedValue({}),
}));

describe('EditSale component', () => {
  const mockData = {
    id: "1",
    orderId: "123",
    productId: "456",
    quantity: "2",
    unitPrice: "50",
    totalPrice: "100",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls updateItem function on successful form submission', async () => {
    render(<EditSale onShowSalesClick={vi.fn()} dataToEdit={mockData} />);

    // Completar el formulario correctamente
    const orderIdInput = screen.getByLabelText(/Order ID/i);
    fireEvent.change(orderIdInput, { target: { value: '456' } });

    const productIdInput = screen.getByLabelText(/Product ID/i);
    fireEvent.change(productIdInput, { target: { value: '789' } });

    const quantityInput = screen.getByLabelText(/Quantity/i);
    fireEvent.change(quantityInput, { target: { value: '3' } });

    const unitPriceInput = screen.getByLabelText(/Unit Price/i);
    fireEvent.change(unitPriceInput, { target: { value: '75' } });

    const totalPriceInput = screen.getByLabelText(/Total Price/i);
    fireEvent.change(totalPriceInput, { target: { value: '150' } });

    // Buscar el botón específico por su texto y hacer clic en él
    const submitButton = screen.getByRole('button', { name: /Update Sale/i });
    fireEvent.click(submitButton);

    // Verificar que se llamó a la función updateItem con los datos correctos
    await vi.waitFor(() => expect(updateItem).toHaveBeenCalledWith(mockData.id, {
      orderId: "456",
      productId: "789",
      quantity: "3",
      unitPrice: "75",
      totalPrice: "150",
    }));
  });
});
