import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthPage from "../Auth/index";
import Notification from "../../components/Notification/index";
import Layout from "../../components/Layout/index";
import HomePage from "../Homepage/index";
import AccountPage from "../AccountPage/index";
import PostDetailsPage from "../PostDetailsPage/index";
import Overlay from "../../components/Overlay";
import NewPostPage from "../NewPostPage/index";
import LoginInPage from "../LoginInPage/index";
import { ThemeProvider } from "styled-components";
import { lightTheme, GlobalStyle } from "../../styles/theme";
import { uiActions } from "../../store/ui-slice/ui-slice";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const showNotification = useSelector((state) => state.ui.showNotification);
  const { status, message } = showNotification;

  const unshowNotification = () => {
    dispatch(uiActions.unshowNotification());
  };

  return (
    <main>
      {user ? (
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Layout>
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/post" element={<NewPostPage />} />
              <Route path="/post/:postId" element={<PostDetailsPage />} />
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
              <Route path="/login" element={<LoginInPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      )}
      {showNotification && (
        <>
          <Overlay onClick={unshowNotification} />
          <Notification
            status={status}
            message={message}
            unshowNotification={unshowNotification}
          />{" "}
        </>
      )}
    </main>
  );
};

export default App;
