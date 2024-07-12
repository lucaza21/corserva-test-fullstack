/* eslint-disable react/prop-types */
function ModalSale({onCloseModal, showdata}) {
    return (
        <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900" id="modal-title">
                      Sale Item Info
                    </h3>
                    <div className="mt-2">
                      <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2 font-medium text-gray-900">ID</td>
                            <td className="px-4 py-2 text-gray-700">{showdata.id}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-medium text-gray-900">Order ID</td>
                            <td className="px-4 py-2 text-gray-700">{showdata.orderId}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-medium text-gray-900">Product ID</td>
                            <td className="px-4 py-2 text-gray-700">{showdata.productId}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-medium text-gray-900">Quantity</td>
                            <td className="px-4 py-2 text-gray-700">{showdata.quantity}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-medium text-gray-900">Unit Price</td>
                            <td className="px-4 py-2 text-gray-700">{showdata.unitPrice}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-medium text-gray-900">Total Price</td>
                            <td className="px-4 py-2 text-gray-700">{showdata.totalPrice}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-medium text-gray-900">Created At</td>
                            <td className="px-4 py-2 text-gray-700">{new Date(showdata.createdAt).toLocaleString()}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-medium text-gray-900">Updated At</td>
                            <td className="px-4 py-2 text-gray-700">{new Date(showdata.updatedAt).toLocaleString()}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => onCloseModal()}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSale