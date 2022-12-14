import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NewOrderPage from "../NewOrder/index";
import AuthPage from "../Auth/index";
import OrderHistoryPage from "../OrderHistory/index";
import Layout from "../../components/Layout/index";
import "./index.css";

const App = () => {
  const [user, setUser] = useState(getUser());

  const logOutUser = (user) => {
    setUser(user);
  };

  const signInUser = (userData) => {
    setUser(userData);
  };
  return (
    <main className="App">
      {user ? (
        <>
          <Layout user={user} setUser={logOutUser}>
            <Routes>
              {/* Route components in here */}
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/orders/new" element={<NewOrderPage />} />
            </Routes>
          </Layout>
        </>
      ) : (
        <AuthPage setUser={signInUser} />
      )}
    </main>
  );
};

export default App;
