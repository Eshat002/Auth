import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./hocs/Layout";
import Signup from "./screens/Signup";
import ResetPassword from "./screens/ResetPassword";
import ResetPasswordConfirm from "./screens/ResetPasswordConfirm";
import Activate from "./screens/Activate";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { Provider } from "react-redux";
import store from "./store";
import Facebook from "./screens/Facebook";
import Google from "./screens/Google";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/facebook" element={<Facebook />} />
            <Route exact path="/google" element={<Google />} />
            <Route exact path="/reset-password" element={<ResetPassword />} />
            <Route
              exact
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route exact path="activate/:uid/:token" element={<Activate />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
