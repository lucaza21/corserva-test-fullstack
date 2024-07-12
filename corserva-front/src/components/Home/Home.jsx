import { useEffect, useState } from "react";
import SalesList from "../SalesList/SalesList";
import AddSale from "../AddSale/AddSale";


import { getItems } from '../../../services/api';
import EditSale from "../EditSale/EditSale";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [salesOrdersItems, setSalesOrdersItems] = useState([]);
  const [shownPage, setShownPage] = useState("list")
  const [dataToEdit, setDataToEdit] = useState(null)

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setSalesOrdersItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const onAddSaleClick = () =>{
    setShownPage("add")
  }

  const onEditSalesClick = (data) =>{
    setDataToEdit(data)
    setShownPage("edit")
  }

  const onShowSalesClick = () =>{
    setShownPage("list")
    fetchItems();
  }

  return (
    <>
      <header className="text-center bg-gradient-to-r from-purple-500 to-cyan-600 h-20 flex items-center justify-center">
        <section className="">
          <h1 className="text-3xl font-bold text-white underline">
            Sales Orders Items App
          </h1>
        </section>
      </header>

      <section className="mx-7 my-7">
        {shownPage === "list" && (
          <>
            <div className="flex justify-end">
              <button 
                onClick={onAddSaleClick} 
                className="gap-1 m-2 px-3 py-2 rounded-full bg-purple-300 flex items-center hover:bg-purple-400 transition duration-200"
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Add Sale
              </button>
            </div>
            <div>
              <SalesList 
                salesOrdersItems={salesOrdersItems} 
                fetchItems={fetchItems} 
                onEditSalesClick={onEditSalesClick} 
              />
            </div>
          </>
        )}

        {shownPage === "add" && (
          <>
            <AddSale onShowSalesClick={onShowSalesClick} />
          </>
        )}

        {shownPage === "edit" && (
          <>
            <EditSale 
              onShowSalesClick={onShowSalesClick} 
              dataToEdit={dataToEdit} 
            />
          </>
        )}
      </section>
    </>
  );
}

export default Home;
