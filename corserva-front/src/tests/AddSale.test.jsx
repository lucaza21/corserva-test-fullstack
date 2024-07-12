import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AddSale from '../components/AddSale/AddSale';
import { createItem } from '../../services/api';

// Mock de funciones o servicios necesarios
vi.mock('../../services/api', () => ({
  createItem: vi.fn().mockResolvedValue({}),
}));

describe('AddSale component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls createItem function on successful form submission', async () => {
    render(<AddSale onShowSalesClick={vi.fn()} />);

    // Completar el formulario correctamente
    const orderIdInput = screen.getByLabelText(/Order ID/i);
    fireEvent.change(orderIdInput, { target: { value: '123' } });

    const productIdInput = screen.getByLabelText(/Product ID/i);
    fireEvent.change(productIdInput, { target: { value: '456' } });

    const quantityInput = screen.getByLabelText(/Quantity/i);
    fireEvent.change(quantityInput, { target: { value: '2' } });

    const unitPriceInput = screen.getByLabelText(/Unit Price/i);
    fireEvent.change(unitPriceInput, { target: { value: '50' } });

    const totalPriceInput = screen.getByLabelText(/Total Price/i);
    fireEvent.change(totalPriceInput, { target: { value: '100' } });

    // Buscar el botón específico por su texto y hacer clic en él
    const submitButton = screen.getByRole('button', { name: /Add Sale/i });
    fireEvent.click(submitButton);

    // Verificar que se llamó a la función createItem con los datos correctos
    await vi.waitFor(() => {
      expect(createItem).toHaveBeenCalled();
    });
  });
});
