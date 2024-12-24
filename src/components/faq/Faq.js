import React, { useEffect, useState } from "react";
import "../appointments/Appointments.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faLeftLong } from "@fortawesome/free-solid-svg-icons";

function Faq(props) {
  let [faq, setfaq] = useState([]);
  let token = window.localStorage.getItem("token");

  useEffect(() => {
    fetch("https://almutamayizun.videosep.com/api/faqs")
    .then((res) => res.json())
    .then((data) => setfaq(data.data));
  }, []);

  console.log(faq);
  let [open, setOpen] = useState(null);
  let toggle = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  let navigate = useNavigate();
  let goback = () => {
    navigate(-1);
  };

  return (
    <div className="container-lg">
      <div className={`appointments ${props.langs}`}>
        <Link onClick={goback}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`back ${props.langs}`}
          />
          {props.langs === "en" ? "رجوع" : "Back"}
        </Link>
        {props.langs === "en" ? <h5>الأسئلة المتكررة</h5> : <h5>Frequently Asked Questions</h5>}
        {faq.length > 0 ? (
          <>
            {faq.map((item) => (
              <div key={item.id} className="accordion">
                <div className="accordion-item">
                  <p className="accordion-header" id={`heading-${item.id}`}>
                    <button
                      className={`accordion-button ${
                        open === item.id ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={open === item.id}
                      aria-controls={`collapse-${item.id}`}
                    >
                      <span className="span2">{`( ${item.id} ) `}</span>
                      <span className="span1">
                        {props.langs === "ar" ? item.name : item.name_ar}
                      </span>{" "}
                    </button>
                  </p>
                  <div
                    id={`collapse-${item.id}`}
                    className={`accordion-collapse collapse ${
                      open === item.id ? "show" : ""
                    }`}
                    aria-labelledby={`heading-${item.id}`}
                  >
                    <div className="accordion-body">
                      <p style={{margin:"0",padding:"10px"}} >{props.langs === "ar" ? item.description : item.description_ar}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) :
        null}
      </div>
    </div>
  );
}

export default Faq;
