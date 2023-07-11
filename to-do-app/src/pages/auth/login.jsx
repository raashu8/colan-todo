import { Grid, TextField } from "@mui/material";
import { router } from "next/router";
import React, { useState } from "react";
// import "styles/globals.css"

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  return !showSignUp ? (
    <>
      <div className="login-page-main ">
        <div className="login-box">
          <div className="login-box-in">
            <div className="login-image">
              <div className="login-image-color">
                <div className="logo">
                  {/* <img src="/images/logo-white.png" alt="" /> */}
                  <img src="/images/logo.png" alt="" />
                </div>

                <div className="quote-content">
                  <div className="desc ">
                    <h1 style={{ fontWeight: "500", fontSize: "45px" }}>
                      {/* Planz Is streamlined and efficient to-do list app for
                      managing your tasks and staying organized. */}
                      Master your schedule, master your life
                    </h1>
                    {/* <br /> */}
                    {/* <h5 className="pt-3">
                      --Master your schedule, master your life--
                    </h5> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="login-content">
              <h2>Welcome Back</h2>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  paddingBottom: "45px",
                  color: "#454545",
                }}
              >
                Please Enter Your Details
              </p>
              <form action="">
                <Grid container spacing={2} className="log-list">
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Email"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Password"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <div
                      style={{
                        maxWidth: "100%",
                        width: " 55%",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <p>Forgot Password?</p>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <button className="btn log-btn mt-2">log in</button>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div
                      className="planz-account"
                      onClick={() => {
                        setShowSignUp(true);
                      }}
                    >
                      <a href="">
                        Don’t have a Planz Account yet?<span> Sign Up Now</span>
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={()=> router.push("/home/main")}>tst</button> */}
    </>
  ) : (
    // signup page starts from here
    <>
      <h2>hello</h2>
    </>
  );
};

export default Login;
