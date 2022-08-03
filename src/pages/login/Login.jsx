import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Group } from "@mantine/core";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReady, setIsReady] = useState(false);
  const MySwal = withReactContent(Swal);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/homepage");
    } else {
      setIsReady(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://mitramas-test.herokuapp.com/auth/login", {
        email: email,
        password: password,
      })
      .then((ress) => {
        localStorage.setItem("auth", ress.data.access_token);
        MySwal.fire({
          title: "Login Success",
          icon: "success",
          confirmButtonText: "Continue",
        }).then(() => {
          navigate("/homepage");
        });
      })
      .catch((err) => {
        MySwal.fire("Cannot Login", "Email or Password Wrong!", "error");
      });
  };

  if (isReady) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="font-bold text-lg Login">Login</h1>

        <form onSubmit={handleLogin}>
          <TextInput placeholder="Email" type="email" label="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <TextInput placeholder="Password" type="password" label="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />

          <Group className="mt-5">
            <Button type="submit" className="bg-sky-600 text-white">
              Submit
            </Button>
          </Group>
        </form>
      </div>
    );
  }
};

export default Login;
