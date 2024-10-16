import { useEffect, useState } from "react";
import "./Invoice.css";
// import logo from "../assets/photos/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineRest } from "react-icons/ai";

const Invoice = () => {
  const location = useLocation();
  const [workItems, setWorkItems] = useState(location.state?.workItems || []);
  const navigate = useNavigate();
  const [count, setCount] = useState("0001");

  useEffect(() => {
    // Load workItems from localStorage if available and workItems state is empty
    const storedWorkItems = localStorage.getItem("workItems");
    if (storedWorkItems && workItems.length === 0) {
      setWorkItems(JSON.parse(storedWorkItems));
    }
  }, []);

  useEffect(() => {
    // Save workItems to localStorage whenever it changes
    if (workItems.length > 0) {
      localStorage.setItem("workItems", JSON.stringify(workItems));
    }
  }, [workItems]);

  // Function to remove an item by index
  const handleRemove = (index) => {
    const updatedWorkItems = workItems.filter((item, i) => i !== index);
    setWorkItems(updatedWorkItems);
  };

  const handlepayment = () => {
    // Navigate to the Payment page
    navigate("/payment");
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
                  
                  INVOICE NO: {count}
                </p>
              </th>
              <th>AUTOCARE VEHICLE SERVICE CENTER</th>
            </tr>
            <tr>
              <th>Description</th>
              <th>Warranty</th>
              <th>Qty</th>
              <th>Parts Code No</th>
              <th>Amount</th>
              <th>Action</th> {/* New column for remove action */}
            </tr>
          </thead>
          <tbody>
            {workItems.map((item, index) => (
              <tr key={index}>
                <td>{item.description || "N/A"}</td>
                <td>{item.warranty || "N/A"}</td>
                <td>{item.qty || "N/A"}</td>
                <td>{item.Code || "N/A"}</td>
                <td>{item.amount || "N/A"}</td>
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
              <button className="payment-button" onClick={handlepayment}>
                Payment &gt;
              </button>
            </div>
            <div className="bg-gray-200 py-2 px-6 rounded-[10px] ">
              <span className="">TOTAL (LKR): </span>
              <span className="total-amount">
                {workItems.reduce(
                  (acc, item) => acc + Number(item.amount || 0),
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
