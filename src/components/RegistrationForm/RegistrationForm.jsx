import React, { useState, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
const RegistrationForm = () => {
  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dancerRole: "",
  });

  const [
    registerDance,
    { error: errorRegisterDance, loading: loadingRegisterDance },
  ] = useMutation(REGISTER_DANCER);

  const handleRegisterDance = (e) => {
    e.preventDefault();
    if (!loadingRegisterDance)
      registerDance({
        variables: {
          firstName: dataForm.firstName,
          lastName: dataForm.lastName,
          phone: dataForm.phone,
          email: dataForm.email,
          dancerRole: dataForm.dancerRole,
        },
      });
    setDataForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      dancerRole: "",
    });
  };

  useEffect(() => {
    if (errorRegisterDance && errorRegisterDance.message)
      console.log(errorRegisterDance.message);
    // eslint-disable-next-line
  }, [errorRegisterDance]);

  return (
    <div className="add-form">
      <form className="">
        <input
          type="text"
          value={dataForm.firstName}
          placeholder="First name"
          onChange={(e) => {
            setDataForm({ ...dataForm, firstName: e.target.value });
          }}
        />
        <input
          type="text"
          value={dataForm.lastName}
          placeholder="Last name"
          onChange={(e) => {
            setDataForm({ ...dataForm, lastName: e.target.value });
          }}
        />
        <input
          type="text"
          value={dataForm.phone}
          placeholder="Phone number"
          onChange={(e) => {
            setDataForm({ ...dataForm, phone: e.target.value });
          }}
        />
        <input
          type="text"
          value={dataForm.email}
          placeholder="E-mail"
          onChange={(e) => {
            setDataForm({ ...dataForm, email: e.target.value });
          }}
        />
        <div className="subscribeButton">
          <h3>What is your preference when dancing?</h3>
          <br />
          <input
            type="radio"
            id="lead"
            name="lead"
            value="lead"
            checked={"lead" === dataForm.dancerRole ? true : false}
            onChange={(e) => {
              setDataForm({ ...dataForm, dancerRole: e.target.defaultValue });
            }}
          />
          Lead
          <br />
          <br />
          <input
            type="radio"
            id="follow"
            name="follow"
            value="follow"
            checked={"follow" === dataForm.dancerRole ? true : false}
            onChange={(e) => {
              setDataForm({ ...dataForm, dancerRole: e.target.defaultValue });
            }}
          />{" "}
          Follow
          <br />
          <br />
          <input
            type="radio"
            id="both"
            name="both"
            value="both"
            checked={"both" === dataForm.dancerRole ? true : false}
            onChange={(e) => {
              setDataForm({ ...dataForm, dancerRole: e.target.defaultValue });
            }}
          />{" "}
          Both
          <br />
          <br />
          <button onClick={(e) => handleRegisterDance(e)}>Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

const REGISTER_DANCER = gql`
  mutation registerDancer(
    $email: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $dancerRole: String!
  ) {
    registerDancer(
      email: $email
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      dancerRole: $dancerRole
    ) {
      ok
    }
  }
`;
