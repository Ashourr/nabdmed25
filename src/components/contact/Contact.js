import React, { useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faEnvelope,
  faLeftLong,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Contact(props) {
  let [fname, setfname] = useState("");
  let [lname, setlname] = useState("");
  let [Subject, setSubject] = useState("");
  let [Message, setMessage] = useState("");

  let [accept, setaccept] = useState(false);
  let [emailError, setemailError] = useState("");
  let [success, setsuccess] = useState(false);
  let [rsepons,setrsepons]=useState("")

  let Navigate = useNavigate();

  async function formSubmit(e) {
    let flog = true;
    e.preventDefault();
    setaccept(true);

    if (fname === "" || lname === "" || Subject === "" || Message === "") {
      flog = false;
    }
    if (flog) {
      flog = true;
    }

    if (flog) {
      try {
        let res = await axios.post(
          "https://almutamayizun.videosep.com/api/support",
          {
            first_name: fname,
            last_name: lname,
            supject: Subject,
            message: Message,
          }
        );
        if (res.status === 200 || res.status === 201) {
          setfname("");
          setlname("");
          setSubject("");
          setMessage("");
          setaccept(false);
          setemailError("");
          console.log(res);
          setsuccess(true);
          setrsepons(res.status)
          // Navigate("/contact");
        }
      } catch (error) {
        // setaccept(false)
        console.log(error);
        setemailError(error.status);
        setsuccess(false);
        setrsepons(0)
      }
    }
  }
  let navigate = useNavigate();
  let goback = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <div className={`contact ${props.langs}`}>
      <Link onClick={goback}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`back ${props.langs}`}
          />{" "}
          {props.langs === "ar" ? "Back" : "رجوع"}
        </Link>
        {props.langs === "ar" ? (
          <h3>
            Contact <span>Us</span>
          </h3>
        ) : (
          <h3>
            اتصل <span>بنا</span>
          </h3>
        )}
        <div className="map">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927758.0366953592!2d47.48203818416085!3d24.724997795540133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1731325239031!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927758.0366953592!2d47.48203818416085!3d24.724997795540133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1731325239031!5m2!1sar!2seg"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4">
            <div className="cont">
              {props.langs === "ar" ? (
                <h5>
                  Contact <span>Info</span>
                </h5>
              ) : (
                <h5>
                  معلومات <span>الاتصال</span>
                </h5>
              )}
              <div className="cont-itme">
                <h6>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} />{" "}
                </h6>
                <p>+2010 9534 8649</p>
              </div>
              <div className="cont-itme">
                <h6>
                  <FontAwesomeIcon icon={faEnvelope} />
                </h6>
                <p>Ashour25@gmail.com</p>
              </div>
              <div className="cont-itme">
                <h6>
                  <FontAwesomeIcon icon={faLocationDot} />
                </h6>
                <p>Egypt, El-fayoum</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8">
            <form onSubmit={formSubmit}>
              {props.langs === "ar" ? (
                <h5>
                  Get In <span>Touch</span>{" "}
                </h5>
              ) : (
                <h5>
                  تواصل <span>معنا</span>{" "}
                </h5>
              )}
              <div className="div1">
                <div className="div2">
                  <label htmlFor="First">
                    {props.langs === "ar" ? "First Name" : "الاسم الاول"}
                  </label>
                  <br />
                  <input
                    type="text"
                    id="First"
                    placeholder={
                      props.langs === "ar" ? "First Name" : "الاسم الاول"
                    }
                    value={fname}
                    onChange={(e) => setfname(e.target.value)}
                  />
                  {fname.length <= 1 && accept && (
                    <span className="error">
                      {props.langs === "ar"
                        ? "First name is required"
                        : "ادخال الاسم الاول"}
                    </span>
                  )}
                </div>
                <div className="div2">
                  <label htmlFor="Last">
                    {props.langs === "ar" ? "Last Name" : "الاسم الاخير"}
                  </label>
                  <br />
                  <input
                    type="text"
                    id="Last"
                    placeholder={
                      props.langs === "ar" ? "Last Name" : "الاسم الاخير"
                    }
                    value={lname}
                    onChange={(e) => setlname(e.target.value)}
                  />
                  {lname.length <= 1 && accept && (
                    <span className="error">
                      {props.langs === "ar"
                        ? "Last name is required"
                        : " ادخال الاسم الاخير"}
                    </span>
                  )}
                </div>
              </div>
              <label htmlFor="Subject">
                {props.langs === "ar" ? "Subject" : "الموضوع"}
              </label>
              <br />
              <input
                type="text"
                id="Subject"
                placeholder={props.langs === "ar" ? "Subject" : "الموضوع"}
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {Subject.length <= 1 && accept && (
                <span className="error">
                  {props.langs === "ar"
                    ? "Subject is required"
                    : " ادخال الموضوع"}
                </span>
              )}
              {/* <br /> */}
              <label htmlFor="Message">
                {props.langs === "ar" ? "Message" : "الرسالة"}
              </label>
              <br />
              <textarea
                id="Message"
                placeholder={props.langs === "ar" ? "Message" : "الرسالة"}
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {Message.length <= 1 && accept && (
                <span className="error">
                  {props.langs === "ar"
                    ? "Message is required"
                    : " ادخال الرسالة"}
                </span>
              )}
              {/* <br /> */}
              { emailError === 422 && (
                <span className="error">
                  {props.langs === "ar"
                    ? "Data transmission error"
                    : "خطأ في إرسال البيانات"}
                </span>
              )}
              {success&& accept == false ? (
                <span className="successmodel">
                  {props.langs === "ar"
                    ? "Message sent successfully"
                    : "تم ارسال الرسالة بنجاح"}
                </span>
              ):null}
              <button type="submit">
                {props.langs === "ar" ? "Send" : "ارسال"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
