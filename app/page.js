'use client'

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {

const [isDarMode, setIsDarkMode] = useState(false);


useEffect(()=>{

  if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    setIsDarkMode(true)
  }
  else{
    setIsDarkMode(false)
  }

},[])

useEffect(()=>{

  if(isDarMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
  else{
    document.documentElement.classList.remove('dark');
    localStorage.theme = '';
  }

},[isDarMode])

  return (
    <>
      <Navbar isDarMode={isDarMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarMode={isDarMode}/>
      <About isDarMode={isDarMode}/>
      <Services isDarMode={isDarMode}/>
      <Work isDarMode={isDarMode}/>
      <Contact isDarMode={isDarMode}/>
      <Footer isDarMode={isDarMode}/>
    </>
  );
}
