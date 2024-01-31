import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const ContactList = () => {
  const {
    loading: loadingGetDancers,
    error: errorGetDancers,
    data: dataGetDancers,
  } = useQuery(GET_DANCERS);

  useEffect(() => {
    if (dataGetDancers) console.log(dataGetDancers);
  }, [dataGetDancers]);

  if (loadingGetDancers) return <p>Loading...</p>;
  if (errorGetDancers) return <p>Error : {errorGetDancers.message}</p>;

  return (
    <div>
      <ul>
        {dataGetDancers.dancerList.map((dancer) => (
          <div key={dancer.email}>
            <li>{dancer.firstName}</li>
            <li>{dancer.lastName}</li>
            <li>{dancer.email}</li>
            <li>{dancer.phone}</li>
            <br></br>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;

const GET_DANCERS = gql`
  query dancerList {
    dancerList {
      firstName
      lastName
      phone
      email
      role
      payed
      loyaltyPoints
      packageType
      createdAt
    }
  }
`;
