import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import DataProvider from "../contexts/DataContext"


export default function App({ Component, pageProps }) {
  return (
    <>
    <DataProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      </DataProvider>
    </>
  );
}
