import "./addwork.css";
import Image2 from "../../assets/photos/Addwork.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Addwork = () => {
  const navigate = useNavigate();
  const [warranty, setWarranty] = useState("");
  const [qty, setQty] = useState(0);
  const [unitAmount, setUnitAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [Code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [workItems, setWorkItems] = useState(() => {
    // Load workItems from localStorage if available
    const savedItems = localStorage.getItem("workItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const { user } = useAuth();

  useEffect(() => {
    console.log({ user: user });
    // Save workItems to localStorage whenever they change
    localStorage.setItem("workItems", JSON.stringify(workItems));
  }, [workItems]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempTotal = qty * unitAmount;
    setTotal(tempTotal);
    // Create an entry object
    const newWorkItem = {
      warranty: warranty,
      qty: qty,
      unitAmount: unitAmount,
      total: tempTotal,
      Code: Code,
      description: description,
    };

    // Add the new entry to the array
    setWorkItems([...workItems, newWorkItem]);

    // Reset form fields
    setWarranty("");
    setQty(0);
    setUnitAmount(0);
    setTotal(0);
    setCode("");
    setDescription("");
  };

  const handleNavigateToInvoice = () => {
    // Navigate to the Invoice page and pass workItems array as state
    navigate("/invoice", { workItems });
  };

  return (
    <div className="design">
      <div className="container-add">
        <div className="form-section">
          <h1>ADD WORK HERE</h1>
          <button
            onClick={() => navigate("/mdashboard")}
            className="mb-4 w-[45px] h-[35px] bg-gray-200 rounded-lg text-black flex justify-center items-center"
          >
            <FaHome />
          </button>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Parts Code No :</label>
              <input
                className="form_input"
                type="text"
                name="Code"
                value={Code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Warranty :</label>
              <input
                className="form_input"
                type="text"
                name="warranty"
                value={warranty}
                onChange={(e) => setWarranty(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Qty :</label>
              <input
                className="form_input"
                type="number"
                name="qty"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Amount (Unit) :</label>
              <input
                className="form_input"
                type="number"
                name="amount"
                value={unitAmount}
                onChange={(e) => setUnitAmount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description of Work :</label>
              <textarea
                className="description_textarea"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex gap-2 justify-between">
              <button
                type="submit"
                className="bg-red-500 py-2 mb-3 rounded w-[300px] hover:bg-red-700"
              >
                ADD TO BILL
              </button>
              <button
                onClick={handleNavigateToInvoice}
                className="bg-green-500 py-2 mb-3 rounded w-[300px] hover:bg-green-700 uppercase"
              >
                View Invoice
              </button>
            </div>
          </form>
        </div>
        <div className="image-section">
          <img
            className="image2"
            src={Image2}
            style={{ width: "auto", height: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Addwork;
