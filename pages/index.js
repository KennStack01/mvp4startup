import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="font-bold text-xl">Hello, World!</h1>
      </Layout>
    </div>
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

    //   </main>

    //   <footer className="flex items-center justify-center w-full h-24 border-t">
    //     <a
    //       className="flex items-center justify-center"
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
    //     </a>
    //   </footer>
    // </div>
  );
}
