import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import MainPage from "./MainPage";
import Ordering from "./Ordering";
import CheckingOut from "./CheckingOut";
import PaymentDoing from "./PaymentDoing";
import Prime from "./Prime";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const [{user} , dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Ordering />} />
          <Route path="/checkout" element={<CheckingOut />} />
          <Route path="/payment" element={<PaymentDoing />} />
          <Route path="/prime" element={<Prime />} />
        </Routes>
      </div>
  );
}

export default App;