/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { deleteItem } from '../../../services/api';
import ModalSale from '../ModalSale/ModalSale';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function SalesList({ salesOrdersItems, fetchItems, onEditSalesClick }) {

  const [showModal, setShowModal] = useState(false);
  const [showdata, setShowData] = useState(null);

  const handleDelete = async (itemId) => {
    try {
      await deleteItem(itemId);
      fetchItems(); 
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleModalClick = (data) => {
    setShowModal(true);
    setShowData(data);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h3 className="text-lg font-semibold">Sales List - Quantity: {salesOrdersItems.length}</h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-3">
        <table className="w-full text-sm text-center text-gray-500 table-auto">
          <thead className="text-xs text-gray-700 uppercase bg-indigo-300 flex w-full">
            <tr className="flex w-full mb-1">
              <th scope="col" className="px-3 py-3 min-w-[200px] sm:min-w-[200px]">
                Actions
              </th>
              <th scope="col" className="px-3 py-3 min-w-[100px] sm:min-w-[100px] ">
                Id
              </th>
              <th scope="col" className="px-3 py-3 min-w-[100px] sm:min-w-[100px] ">
                orderId
              </th>
              <th scope="col" className="px-3 py-3 min-w-[100px] sm:min-w-[100px] ">
                productId
              </th>
              <th scope="col" className="px-3 py-3 min-w-[100px] sm:min-w-[100px] ">
                quantity
              </th>
              <th scope="col" className="px-3 py-3 min-w-[100px] sm:min-w-[100px] ">
                unitPrice
              </th>
              <th scope="col" className="px-3 py-3 min-w-[100px] sm:min-w-[100px] ">
                totalPrice
              </th>
              <th scope="col" className="px-3 py-3 min-w-[100px] sm:min-w-[170px] ">
                createdAt
              </th>
              <th scope="col" className="px-3 py-3 min-w-[100px] sm:min-w-[170px] ">
                updatedAt
              </th>
            </tr>
          </thead>
          <tbody
            className="bg-grey-light flex flex-col overflow-y-scroll px-auto py-3 w-full"
            style={{ height: "55vh" }}
          >
            {salesOrdersItems.map((sale) => (
              <tr
                key={sale.id}
                className="bg-white border-b hover:text-white hover:bg-gray-700"
              >
                <td className="px-3 py-3 min-w-[200px] sm:min-w-[200px]">
                  <button
                    className="m-2 px-3 rounded-full bg-blue-300 hover:bg-blue-400 transition duration-200"
                    onClick={() => handleModalClick(sale)}
                    aria-label="View"
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button
                    className="m-2 px-3 rounded-full bg-green-300 hover:bg-green-400 transition duration-200"
                    onClick={() => onEditSalesClick(sale)}
                    aria-label="Edit"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="m-2 px-3 rounded-full bg-red-300 hover:bg-red-400 transition duration-200"
                    onClick={() => handleDelete(sale.id)}
                    aria-label="Delete"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
                <td className="px-3 py-5 min-w-[100px] sm:min-w-[100px] ">{sale.id}</td>
                <td className="px-3 py-auto min-w-[100px] sm:min-w-[100px] ">{sale.orderId}</td>
                <td className="px-3 py-auto min-w-[100px] sm:min-w-[100px] ">{sale.productId}</td>
                <td className="px-3 py-auto min-w-[100px] sm:min-w-[100px] ">{sale.quantity}</td>
                <td className="px-3 py-auto min-w-[100px] sm:min-w-[100px] ">{sale.unitPrice}</td>
                <td className="px-3 py-auto min-w-[100px] sm:min-w-[100px] ">{sale.totalPrice}</td>
                <td className="px-3 py-auto min-w-[100px] sm:min-w-[170px] ">{sale.createdAt}</td>
                <td className="px-3 py-auto min-w-[100px] sm:min-w-[170px] ">{sale.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && showdata !== null && <ModalSale onCloseModal={onCloseModal} showdata={showdata} />}
    </>
  );
}

export default SalesList;
