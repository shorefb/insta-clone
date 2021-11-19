import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link
          rel="icon"
          href="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
        />
      </Head>
      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
