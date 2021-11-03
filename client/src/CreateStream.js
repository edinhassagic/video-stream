import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStream } from "./redux/actions";

const CreateStream = () => {
  const [state, setstate] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState("");

  const { title, description } = state;

  let history = useHistory();
  let dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError("Please fill all fields!");
    } else {
      dispatch(addStream(state));
      history.push("/");
      setError("");
    }
  };

  return (
    <div>
      
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch", marginLeft: "10rem" },
        }}
        noValidate
        autoComplete="off"
      >
        <h3>Add stream</h3>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <TextField
          id="standard-basic"
          label="Enter title"
          variant="standard"
          name="title"
          value={title}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Enter Description"
          variant="standard"
          value={description}
          type="text"
          name="description"
          onChange={handleInputChange}
        />
      </Box>
      <Button
      onChange={handleInputChange}
      onClick={handleSubmit}
        type="submit"
        color="primary"
        variant="contained"
        style={{ marginLeft: "10rem", marginTop: "20px", width: "100px" }}
      >
        Submit
      </Button>
      <Button
        onClick={() => history.push("/")}
        color="primary"
        variant="contained"
        style={{ marginLeft: "10rem", marginTop: "20px", width: "100px" }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default CreateStream;
