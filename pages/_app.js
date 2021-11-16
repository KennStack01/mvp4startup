import "tailwindcss/tailwind.css";
import { AuthContextProvider } from "../stores/authContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthContextProvider>
  );
}

export default MyApp;
