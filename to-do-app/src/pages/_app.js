import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';



export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
    <ToastContainer
        theme="dark"
        position="top-center"
      />
  <Component {...pageProps} />
  </>)
}
