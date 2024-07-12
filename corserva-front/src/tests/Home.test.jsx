import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Home from '../components/Home/Home';
import { getItems } from '../../services/api';

// Mock de funciones o servicios necesarios
vi.mock('../../services/api', () => ({
  getItems: vi.fn().mockResolvedValue({ data: [] }),
}));

describe('Home component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders Home component with initial list view', async () => {
    render(<Home />);

    // Verificar que el título esté presente
    const titleElement = screen.getByText(/Sales Orders Items App/i);
    expect(titleElement).toBeInTheDocument();

    // Verificar que el botón "Add Sale" esté presente
    const addSaleButton = screen.getByText(/Add Sale/i);
    expect(addSaleButton).toBeInTheDocument();

    // Simular clic en el botón "Add Sale"
    fireEvent.click(addSaleButton);

    // Verificar que se cambia a la vista de añadir venta
    const orderIdInput = await screen.findByLabelText(/Order ID/i);
    expect(orderIdInput).toBeInTheDocument();
  });

  it('fetchItems function is called on component mount', async () => {
    render(<Home />);

    // Esperar a que se llame a la función fetchItems
    expect(getItems).toHaveBeenCalled();
  });
});
