import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";

export default function FaqPage() {
  let [lang, setlang] = useState("en");
  let [loading, setloading] = useState(true);

  function langs() {
    if (lang === "en") {
      setlang("ar");
      localStorage.setItem("lang", "ar");
    } else {
      setlang("en");
      localStorage.setItem("lang", "en");
    }
  }
  useEffect(() => {
    setlang(localStorage.getItem("lang"));
    window.scroll(0, 0);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar lang={langs} langs={lang} />
          <Faq langs={lang} />
          <Footer langs={lang} />
        </>
      )}
    </>
  );
}
