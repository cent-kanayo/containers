import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/notes");
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };
  const postNotes = async (notes) => {
    try {
      const { data } = await axios.post("http://localhost:3000/notes", notes);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteNotes = async (id) => {
    try {
      const { data } = await axios.post(`http://localhost:3000/notes/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postNotes({ title, body });
    setBody("");
    setTitle("");
  };

  useEffect(() => {
    fetchNotes();
  }, [notes]);

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", padding: "2rem" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="body"
          value={body}
          cols="30"
          rows="10"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">submits</button>
      </form>

      <div>
        {notes.length < 1 && <h1>Loading...</h1>}
        {notes.map((note) => (
          <>
            <div key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </div>
            <button onClick={() => deleteNotes(note._id)}>delete</button>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
