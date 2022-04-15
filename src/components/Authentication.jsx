import React, { useState, useEffect } from "react";

//MUI components
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import logo from "../image/logo.jpg";
import "../styles.scss";

export default function Authentication(props) {
  const [kseRESTApi] = useState(props.kseRESTApi);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setShowLogin(true);
  }, []);

  /***FUNC*************************************************************************************************************************************/
  function handleLoginChange(event) {
    // console.log("LOGIN", event.target.value)
    setUserName(event.target.value);
    setError(false);
  }
  function handlePasswordChange(event) {
    // console.log("PASS", event.target.value)
    setPassword(event.target.value);
    setError(false);
  }
  function handleRememberMeChange(event) {
    // console.log("RM ME", event.target.checked)
    setRememberMe(event.target.checked);
  }
  async function LoginButtonClick() {
    let body = JSON.stringify({
      userName: username,
      password: password,
    });
    await fetch(kseRESTApi + "/api/users/Login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: body,
    })
      .then((response) => response.json())
      .then(async function (res) {
        // console.log("RES", res)
        console.log("AUTH TOKEN", res.token);
        if (res.isAuthSuccessful === true) {
          // props.setToken(res.token)
          await fetchUserProfile(res.token);
          setUserName("");
          setPassword("");
          if (rememberMe === true) {
            localStorage.setItem("token", res.token);
          }
        } else {
          setError(true);
        }
      })
      .catch(function (er) {
        console.log("ERR", er);
      });
  }
  async function fetchUserProfile(token) {
    console.log("LOAD PROFILE");
    await fetch(kseRESTApi + "/api/users/GetUserInfo", {
      headers: { Authorization: "Bearer " + token },
      method: "GET",
    })
      .then((response) => response.json())
      .then(async function (res) {
        console.log("PROFILE", res);
        await props.authenticate(res, token);
      });
  }
  function onKeyPressLogin(event) {
    let code = event.charCode;
    if (code === 13) {
      // console.log("CODE", code)
      handleLoginChange(event);
      LoginButtonClick();
    }
  }
  function onKeyPressPassword(event) {
    let code = event.charCode;
    if (code === 13) {
      // console.log("CODE", code)
      handlePasswordChange(event);
      LoginButtonClick();
    }
  }
  /***RENDERING***************************************************************************************************************************************/
  return (
    showLogin === true && (
      <React.Fragment>
        <Container className="auth_container">
          <Box className="auth_box">
            <div className="auth_div">
              <img src={logo} alt="Logo" />
            </div>
            <form noValidate autoComplete="off" align="center">
              {error === true && (
                <p className="auth_error">
                  {" "}
                  Не верное имя пользователя или пароль!{" "}
                </p>
              )}
              <div className="auth_div">
                <TextField
                  className="auth_textfield"
                  id="username"
                  name="username"
                  label="Логин"
                  variant="standard"
                  size="medium"
                  error={error}
                  value={username}
                  autoFocus={true}
                  autoComplete={true}
                  onChange={handleLoginChange}
                  onKeyPress={onKeyPressLogin}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserAlt className="auth_logPass" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="auth_div">
                <FormControl variant="standard">
                  <TextField
                    className="auth_textfield"
                    id="password"
                    name="password"
                    label="Пароль"
                    variant="standard"
                    size="medium"
                    error={error}
                    value={password}
                    type={showPassword ? "text" : "password"}
                    autoFocus={true}
                    onChange={handlePasswordChange}
                    onKeyPress={onKeyPressPassword}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FaLock className="auth_logPass" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </div>
            </form>
            <div className="auth_div_chekBox">
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        size="small"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                      />
                    }
                    label={
                      <Typography className="auth_typography">
                        Запомнить меня
                      </Typography>
                    }
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            </div>
            <div className="auth_div">
              <Button
                className="auth_btn"
                name="Login"
                variant="contained"
                style={{ backgroundColor: "#086ebd" }}
                onClick={() => LoginButtonClick()}
              >
                <b>Войти</b>
              </Button>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    )
  );
}
