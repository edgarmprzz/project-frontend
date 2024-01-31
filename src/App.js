import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import ContactList from "./components/ContactList/ContactList";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Logo from "./components/Logo/Logo";

const App = () => {
  return (
    <div className="app">
      {/* <ContactList /> */}
      <Logo />
      <RegistrationForm />
    </div>
  );
};

export default App;
