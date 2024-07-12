/* eslint-disable react/prop-types */
import { useState } from "react";
import * as yup from "yup";
import { createItem } from '../../../services/api';


const schema = yup.object().shape({
    orderId: yup.number().required("Order ID is required").positive().integer(),
    productId: yup.number().required("Product ID is required").positive().integer(),
    quantity: yup.number().required("Quantity is required").positive().integer(),
    unitPrice: yup.number().required("Unit price is required").positive(),
    totalPrice: yup.number().required("Total price is required").positive(),
  });
  

function AddSale({onShowSalesClick}) {

    const [formData, setFormData] = useState({
        orderId: "",
        quantity: "",
        productId: "",
        unitPrice: "",
        totalPrice: "",
      });
      const [errors, setErrors] = useState({});
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await schema.validate(formData, { abortEarly: false });
          setErrors({});
          await createItem(formData);
          onShowSalesClick();
        } catch (error) {
          if (error.inner) {
            const errorMessages = error.inner.reduce((acc, currentError) => {
              acc[currentError.path] = currentError.message;
              return acc;
            }, {});
            setErrors(errorMessages);
          } else {
            console.error(error);
          }
        }
      };

  return (
    <>
      <h3 className="text-lg font-semibold text-center">Add Sale Form</h3>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="orderId" className="block text-sm font-medium leading-6 text-gray-900">
              Order ID
            </label>
            <div className="mt-2">
              <input
                id="orderId"
                name="orderId"
                type="text"
                value={formData.orderId}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.orderId && <p className="text-red-500 text-xs mt-1">{errors.orderId}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="productId" className="block text-sm font-medium leading-6 text-gray-900">
              Product ID
            </label>
            <div className="mt-2">
              <input
                id="productId"
                name="productId"
                type="text"
                value={formData.productId}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.productId && <p className="text-red-500 text-xs mt-1">{errors.productId}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
              Quantity
            </label>
            <div className="mt-2">
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="unitPrice" className="block text-sm font-medium leading-6 text-gray-900">
              Unit Price
            </label>
            <div className="mt-2">
              <input
                id="unitPrice"
                name="unitPrice"
                type="text"
                value={formData.unitPrice}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.unitPrice && <p className="text-red-500 text-xs mt-1">{errors.unitPrice}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="totalPrice" className="block text-sm font-medium leading-6 text-gray-900">
              Total Price
            </label>
            <div className="mt-2">
              <input
                id="totalPrice"
                name="totalPrice"
                type="text"
                value={formData.totalPrice}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.totalPrice && <p className="text-red-500 text-xs mt-1">{errors.totalPrice}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Sale
            </button>
          </div>
        </form>

        <div className="mt-4">
          <button
            type="button"
            onClick={() => onShowSalesClick()}
            className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back
          </button>
        </div>
      </div>
    </>
  )
}

export default AddSale