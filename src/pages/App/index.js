import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthPage from "../Auth/index";
import Layout from "../../components/Layout/index";
import HomePage from "../Homepage/index";
import AccountPage from "../AccountPage/index";
import PostDetailsPage from "../PostDetailsPage/index";
import NewPostPage from "../NewPostPage/index";
import LoginInPage from "../LoginInPage/index";
import { ThemeProvider } from "styled-components";
import { lightTheme, GlobalStyle } from "../../styles/theme";

const App = () => {
  const user = useSelector(state => state.user.user)

  return (
    <main>
      {user ? (
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Layout>
            <Routes>
              {/* Route components in here */}
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route path="/post" element={<NewPostPage />} />
              <Route
                path="/post/:postId"
                element={<PostDetailsPage />}
              />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route
                path="/login"
                element={<LoginInPage />}
              />
            </Routes>
          </Layout>
        </ThemeProvider>
      )}
    </main>
  );
};

export default App;
