import { FaLocationArrow } from "react-icons/fa6";

const ChatModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.div}>
          <h2>Chat</h2>
          <button onClick={onClose} style={styles.closeButton}>
            X
          </button>
        </div>
        <div style={styles.content}>
          {/* Chat bot UI goes here */}
          <p>Chat with our bot!</p>
        </div>
        <div >
            <input type="text" style={styles.input} />
            <div style={styles.sendButton}>
                <FaLocationArrow />
            </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000,
  },
  modal: {
    backgroundColor: "white",
    borderRadius: "8px",
    // padding: '20px',
    width: "300px",
    height: "400px",
    position: "relative",
  },
  closeButton: {
    // position: 'absolute',
    // top: '10px',
    // right: '10px',
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    marginleft: "10px",
  },
  content: {
    marginTop: "10px",
    marginLeft: "10px",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#13496b",
    padding: "10px",
    width: "100%",
    color: "white",
  },
  input: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    width: "80%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  sendButton : {
    position: "absolute",
    bottom: "20px",
    right: "10px",
    width: "30px",
    height: "30px",
    backgroundColor: "#13496b",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
  }
};

export default ChatModal;
