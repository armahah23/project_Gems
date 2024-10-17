import { useEffect, useState } from "react";
import "./Invoice.css";
// import logo from "../assets/photos/logo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineRest } from "react-icons/ai";

const Invoice = () => {
  const [workItems, setWorkItems] = useState(() => {
    // Load workItems from localStorage if available
    const savedItems = localStorage.getItem("workItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const navigate = useNavigate();
  const [invoiceNo, setInvoiceNo] = useState(1);

  useEffect(() => {
    localStorage.setItem("workItems", JSON.stringify(workItems));
  }, [workItems]);

  // Load the invoice number from localStorage on initial render
  useEffect(() => {
    const savedInvoiceNo = localStorage.getItem("invoiceNo");
    if (savedInvoiceNo) {
      setInvoiceNo(parseInt(savedInvoiceNo, 10));
    }
  }, []);

  const handleCreateBill = () => {
    const newInvoiceNo = invoiceNo + 1;
    setInvoiceNo(newInvoiceNo);
    localStorage.setItem("invoiceNo", newInvoiceNo);
    navigate("/mdashboard");
    // Make empty array
    setWorkItems([]);
  };

  // Function to remove an item by index
  const handleRemove = (index) => {
    const updatedWorkItems = workItems.filter((item, i) => i !== index);
    setWorkItems(updatedWorkItems);
  };

  //use to navigate to the previous page
  const handleGoback = () => {
    navigate("/addwork");
  };

  return (
    <div className="invoice-main">
      <div className="flex flex-col items-center mt-4 w-[80%]">
        <table className="invoice-table mb-6">
          <thead>
            <tr colSpan="6">
              <th>
                <p className="text-black text-left mb-2">
                  INVOICE NO: {invoiceNo}
                </p>
              </th>
              <th>AUTOCARE VEHICLE SERVICE CENTER</th>
            </tr>
            <tr>
              <th>Description</th>
              <th>Warranty</th>
              <th>Parts Code No</th>
              <th>Qty</th>
              <th>Amount</th>
              <th>Total</th>
              <th>Action</th> {/* New column for remove action */}
            </tr>
          </thead>
          <tbody>
            {workItems.map((item, index) => (
              <tr key={index}>
                <td>{item.description || "N/A"}</td>
                <td>{item.warranty || "N/A"}</td>
                <td>{item.Code || "N/A"}</td>
                <td>{item.qty ?? "N/A"}</td>
                <td>{item.unitAmount ?? "N/A"}</td>
                <td>{item.total ?? "N/A"}</td>
                <td>
                  <button onClick={() => handleRemove(index)}>
                    <AiOutlineRest />
                  </button>
                </td>
              </tr>
            ))}
            {/* Central logo row */}
            {/* <tr>
              <td colSpan="6" className="center-logo-cell">
                <div className="logo-container">
                  <img
                    className="logo"
                    src={logo}
                    style={{ width: "150px", height: "150px" }}
                  />
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>

        <div className="flex justify-between w-[100%] gap-5">
          <div>
            <button className="payment-button" onClick={handleGoback}>
              Go Back
            </button>
          </div>
          <div className="flex gap-8">
            <div className="">
              <button className="payment-button" onClick={handleCreateBill}>
                Submit &gt;
              </button>
            </div>
            <div className="bg-gray-200 py-2 px-6 rounded-[10px] ">
              <span className="">MAIN TOTAL (LKR): </span>
              <span className="total-amount">
                {workItems.reduce(
                  (acc, item) => acc + Number(item.unitAmount || 0),
                  0
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
