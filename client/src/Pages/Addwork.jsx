import "./Addwork.css"; // Assuming you'll style in a CSS file
import Image2 from "../assets/photos/Addwork.jpg";
import { useState } from "react";

const AddWorkPage = () => {
  const [warranty, setWarranty] = useState("");
  const [qty, setQty] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/esignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Work added successfully!");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="design">

    
    <div className="container-add">
      <div className="form-section">
        <h1>ADD WORK HERE</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Warranty :</label>
            <input
              type="text"
              name="warranty"
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Qty :</label>
            <input
              type="number"
              name="qty"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Amount :</label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description of Work :</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-submit">
            ADD TO BILL
          </button>
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

export default AddWorkPage;
