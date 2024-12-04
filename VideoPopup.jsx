import React, { useState, useEffect } from "react";
import Modal from "react-modal";

// Required to avoid accessibility issues
Modal.setAppElement("#root");

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup only if the user hasn't seen it before
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsOpen(true);
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        content: {
          width: "80%",
          maxWidth: "600px",
          margin: "auto",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
        },
      }}
    >
      <h2>Welcome to Our Website!</h2>
      <p>Watch this short video to learn more about us:</p>
      <video
        controls
        style={{
          width: "100%",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <source src="https://youtu.be/2n1VO_BIQRU?si=Tc-WzLWjWToTan5Z" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={closeModal}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </Modal>
  );
};

export default VideoPopup;
