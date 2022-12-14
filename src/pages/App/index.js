import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../Auth/index";
import Layout from "../../components/Layout/index";
import "./index.css";
import HomePage from "../Homepage/index";
import AccountPage from '../AccountPage/index'
import PostDetailsPage from '../PostDetailsPage/index'
import NewPostPage from '../NewPostPage/index'

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
              <Route path="/" element={<HomePage />} />
              <Route path="/post" element={<NewPostPage />} />
              <Route path="/post/:postId" element={<PostDetailsPage />} />
              <Route path="/account/" element={<AccountPage  user={user}/>} />
            </Routes>
          </Layout>
        </>
      ) : ( 
        <Routes>
          <Route path="/" element={<AuthPage setUser={signInUser}/>} />
        </Routes>
      )}
    </main>
  );
};

export default App;
