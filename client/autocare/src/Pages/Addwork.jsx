import React from "react";
import './Addwork.css'; // Assuming you'll style in a CSS file
import  Image2 from '../assets/photos/Addwork.jpg'

const AddWorkPage = () => {
  return (
    <div className="container">
      <div className="form-section">
        <h1>ADD WORK HERE</h1>
        <form>
          <div className="form-group">
            <label>Warranty :</label>
            <input type="text" name="warranty" />
          </div>
          <div className="form-group">
            <label>Qty :</label>
            <input type="number" name="qty" />
          </div>
          <div className="form-group">
            <label>Amount :</label>
            <input type="number" name="amount" />
          </div>
          <div className="form-group">
            <label>Description of Work :</label>
            <textarea name="description" />
          </div>
          <button type="submit" className="btn-submit">ADD TO BILL</button>
        </form>
      </div>
      <div className="image-section">
      <img className='image2' src={Image2} style={{ width: 'auto', height: '500px' }} />
      </div>
    </div>
  );
};

export default AddWorkPage;
