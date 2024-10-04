import React, { useState } from "react";
import axios from "axios";

const Notes = () => {
  const [email, setEmail] = useState("");
  const [notes, setNote] = useState("");

  const handleAddNote = async () => {
    try {
      const response = await axios.post("http://localhost:8000/postnote", {
        email: email,
        notes: notes,
      });

      if (response.status === 200) {
        alert("Note added successfully!");
      }
    } catch (error) {
      console.error("Error adding note:", error);
      alert("Failed to add note.");
    }
  };

  return (
    <div>
      <h1>Add Note to User</h1>
      <input
        type="email"
        placeholder="User Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Add a note"
        value={notes}
        onChange={(e) => setNote(e.target.value)}
      />
      <br />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default Notes;
