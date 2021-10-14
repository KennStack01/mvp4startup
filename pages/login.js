import Head from "next/head";
import Auth from "../components/Auth";
import Layout from "../components/Layout";
import LoginImage from "-!svg-react-loader!../public/svg/login.svg";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Se Connecter - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="flex flex-row">
          <LoginImage className="hidden md:block" />
          <Auth />
        </div>
      </Layout>
    </div>
  );
}
