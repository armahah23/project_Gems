import React, { useState } from 'react';
import './Invoice.css';
import logo from '../assets/photos/logo.png';
import { useLocation } from 'react-router-dom';

const Invoice = () => {
  const location = useLocation();
  const [workItems, setWorkItems] = useState(location.state?.workItems || []);

  // Function to remove an item by index
  const handleRemove = (index) => {
    const updatedWorkItems = workItems.filter((item, i) => i !== index);
    setWorkItems(updatedWorkItems);
  };

  return (
    <div className='invoice-main'>
      <div className="invoice-container">
        <div className="invoice-header">
          <span className="invoice-number">INVOICE NO: 0001</span>
        </div>

        <table className="invoice-table">
          <thead>
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
                <td>{item.description || 'N/A'}</td>
                <td>{item.warranty || 'N/A'}</td>
                <td>{item.qty || 'N/A'}</td>
                <td>{item.Code || 'N/A'}</td>
                <td>{item.amount || 'N/A'}</td>
                <td>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))}
            {/* Central logo row */}
            <tr>
              <td colSpan="6" className="center-logo-cell">
                <div className="logo-container">
                  <img className='logo' src={logo} style={{ width: '150px', height: '150px' }} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="invoice-footer">
          <div className="total">
            <span>Total LKR :</span>
            <span className="total-amount">
              {workItems.reduce((acc, item) => acc + Number(item.amount || 0), 0)}
            </span>
          </div>
          <button className="payment-button">Payment &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
