import { Grid, TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import "animate.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import "styles/globals.css"

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (event) => {
    if (login === "user" && password === "useradmin") {
      console.log("hello");

      router.push("/home/main");
    } else {
      toast.error("please fill the required list");
      console.log("alert");

      // alert("please enter correct login credentials");
    }
    event.preventDefault();
  };

  // React.useEffect(() => {
  //   history.pushState(null, null, location.href);
  //   window.onpopstate = function () {
  //     history.go(1);
  //   };
  // }, []);

  return !showSignUp ? (
    <>
      {/* login page starts from here */}
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

            <div
              className="login-content animate__fadeInDown "
              style={{ position: "relative" }}
            >
              <div className="log-phone">
                <img src="/images/logo.png" alt="" />
              </div>
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
                      onChange={(e) => {
                        setLogin(e.target.value);
                      }}
                      value={login}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Password"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
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
                    <button className="btn log-btn mt-2" onClick={handleLogin}>
                      log in
                    </button>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div
                      className="planz-account"
                      onClick={() => {
                        setShowSignUp(true);
                      }}
                    >
                      <Link href="">
                        Don’t have a Planz Account yet?<span> Sign Up Now</span>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* login page ends here */}
      {/* <button onClick={()=> router.push("/home/main")}>tst</button> */}
    </>
  ) : (
    <>
      {/* signup page starts from here */}
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

            <div className="login-content" style={{ position: "relative" }}>
              <div className="log-phone">
                <img src="/images/logo.png" alt="" />
              </div>
              <h2>Welcome 👋</h2>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  paddingBottom: "45px",
                  color: "#454545",
                }}
              >
                Create your Planz Account
              </p>
              <form action="">
                <Grid container spacing={2} className="log-list">
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Name"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>
                  {/* number */}
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Number"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>
                  {/* email */}
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Email"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>
                  {/* password */}
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Password"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>

                  {/* confirm password */}
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Confirm Password"
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
                    <button
                      className="btn log-btn mt-2"
                      onClick={(event) => {
                        // event.preventDefault();
                        router.push("/home/main");
                      }}
                    >
                      log in
                    </button>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div
                      className="planz-account"
                      onClick={() => {
                        setShowSignUp(false);
                      }}
                    >
                      <Link href="">
                        Already have a Planz Account<span> Login Now</span>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* signup page ends here */}
 
      
    </>
  );
};

export default Login;
