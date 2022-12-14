import React from "react";
import { checkToken } from "../../utilities/users-service";

const OrderHistoryPage = () => {
  const handleCheckToken = async () => {
    const expDate = await checkToken()
    console.log(expDate)
  }
  return (
    <>
      <div>OrderHistoryPage</div>
      <button onClick={handleCheckToken}>Check when my Login Expires</button>
    </>
  );
};

export default OrderHistoryPage;