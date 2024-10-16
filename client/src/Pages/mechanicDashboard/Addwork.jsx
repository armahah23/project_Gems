import "./addwork.css";
import Image2 from "../../assets/photos/Addwork.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addwork = () => {
  const navigate = useNavigate();
  const [warranty, setWarranty] = useState("");
  const [qty, setQty] = useState("");
  const [amount, setAmount] = useState("");
  const [Code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [workItems, setWorkItems] = useState([]); // Store multiple entries

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an entry object
    const newWorkItem = {
      warranty,
      qty,
      amount,
      Code,
      description,
    };

    // Add the new entry to the array
    setWorkItems([...workItems, newWorkItem]);

    // Reset form fields
    setWarranty("");
    setQty("");
    setAmount("");
    setCode("");
    setDescription("");
  };

  const handleNavigateToInvoice = () => {
    // Navigate to the Invoice page and pass workItems array as state
    navigate("/invoice", { state: { workItems } });
  };

  return (
    <div className="design">
      <div className="container-add">
        <div className="form-section">
          <h1>ADD WORK HERE</h1>
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
              <label>Amount :</label>
              <input
                className="form_input"
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
              <button type="submit" className="bg-red-500 py-2 mb-3 rounded w-[300px] hover:bg-red-700">
              ADD TO BILL
            </button>
            <button onClick={handleNavigateToInvoice} className="bg-green-500 py-2 mb-3 rounded w-[300px] hover:bg-green-700 uppercase">
            View Invoice
          </button>
            </div>
            
          </form>

          {/* Button to navigate to the Invoice page */}
          
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
