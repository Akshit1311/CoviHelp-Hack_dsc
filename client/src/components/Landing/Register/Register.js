import React, { useState } from "react";

//Style
import "./Register.css";

//assets
import Covid from "../../../assets/covid.png";

//MaterialUI
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    email: "",
    govId: "",
    password: "",
    confirmPass: "",
  });

  const { name, type, email, govId, password, confirmPass } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <h1>
        Register
        <img src={Covid} alt="covid" className="covid__icon" />
      </h1>

      <div className="register__inputs">
        <TextField
          id="govId"
          name="govId"
          label="Government Issued Id"
          type="text"
          value={govId}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <FormControl>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={handleChange}>
            <MenuItem value={"Factory"}>Factory</MenuItem>
            <MenuItem value={"Hospital"}>Hospital</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          value={name}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          type="text"
          value={email}
          onChange={handleChange}
          style={{ width: "100%" }}
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          id="confirmPass"
          name="confirmPass"
          label="Confirm Password"
          type="confirmPass"
          value={confirmPass}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </div>
      <button className="btn btn-warning">Submit</button>
    </div>
  );
};

export default Register;
