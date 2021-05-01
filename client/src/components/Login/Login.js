import React, { useState } from "react";

// Styles
import "./Login.css";

//MaterialUI
import TextField from "@material-ui/core/TextField";

//Assets
import Covid from "../../assets//covid.png";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [type, setType] = useState("");

  const handleSubmit = () => {};

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>
        Login
        <img src={Covid} alt="covid" className="covid__icon" />
      </h1>
      <br />

      <div className="login__inputs">
        <TextField
          id="email"
          label="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%" }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%" }}
        />

        <FormControl>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value={"Factory"}>Factory</MenuItem>
            <MenuItem value={"Hospital"}>Hospital</MenuItem>
          </Select>
        </FormControl>
      </div>

      <button className="btn btn-warning">Submit</button>
    </form>
  );
};

export default Login;
