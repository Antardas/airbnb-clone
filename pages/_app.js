import { Router } from 'next/router';
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import 'mapbox-gl/dist/mapbox-gl.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, createContext, useState, useRef } from 'react';
import { useOutsideClick } from '../Hooks/useOutsideClick';


const progress = new ProgressBar({
  size: 4,
  color: "#e9385b",
  className: "bar-of-progress",
  delay: 80,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export const MenuContext = createContext();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => { setTimeout(() => { AOS.init() }, 0) }, [])
  return (
    <SessionProvider session={session}>
      <MenuContext.Provider value={{ showMenu, setShowMenu }}>
        <div >
          <Component {...pageProps} />
        </div>
      </MenuContext.Provider>
    </SessionProvider>
  )
}

export default MyApp
