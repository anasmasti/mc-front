import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import MainLayout from "../layouts/MainLayout";
import { Provider } from "react-redux";
import { useStore } from "../store/store";

function MCApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MCApp;
