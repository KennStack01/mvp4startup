import Head from "next/head";
import Auth from "../components/Auth";
import Layout from "../components/Layout";
import LoginImage from "-!svg-react-loader!../public/svg/signup.svg";
import CreateAccount from "../components/CreateAccount";

export default function Signup() {
  return (
    <div>
      <Head>
        <title>Créer un Compte - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="flex flex-row mx-auto">
          <div className="md:w-2/4">
            <CreateAccount />
          </div>
          <LoginImage className="hidden md:block w-2/4 ml-20" />
        </div>
      </Layout>
    </div>
  );
}
