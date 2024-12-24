import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../imges/nav.png";
import footer1 from "../../imges/footer1.png";
import footer2 from "../../imges/footer2.png";

function Footer(props) {
  return (
    <div className={`footer ${props.langs}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="img">
              <div className="div1">
                <img src={logo} alt="..." />
                {props.langs === "en" ? (
                  <p>
                    لوريم إيبسوم دولور الجلوس أميت كونسيكتور. ليو لوريم إيبسوم
                    دولور الجلوس أميت كونسيكتور. ليو لوريم إيبسوم دولور الجلوس
                    أميت كونسيكتور. ليو{" "}
                  </p>
                ) : (
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Leo pellentesque
                    cras ut cras tempor dignissim dui donec. Eu donec egestas
                    non porttitor. Ut habitasse purus dui.
                  </p>
                )}
                <div className="icons">
                  <FontAwesomeIcon icon={faFacebook} className="icon" />
                  <FontAwesomeIcon icon={faSquareInstagram} className="icon" />
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-2">
            <div className="div2">
              <h5>{props.langs === "en" ? "خدماتنا" : "Our Services"}</h5>
              <ul>
                <li>
                  <Link>
                    {props.langs === "en"
                      ? "المشاورات الافتراضية"
                      : "Virtual Consultations"}
                  </Link>
                </li>
                <li>
                  <Link>
                    {props.langs === "en" ? "زيارة الطبيب  " : "Doctor Visit"}{" "}
                  </Link>
                </li>
                <li>
                  <Link>
                    {props.langs === "en" ? "الرعاية المنزلية" : "Home Care"}{" "}
                  </Link>
                </li>
                <li>
                  <Link>
                    {props.langs === "en" ? "زيارة الممرضة" : "Nurse Visit"}
                  </Link>
                </li>
                <li>
                  <Link>
                    {props.langs === "en"
                      ? "العلاج الطبيعي"
                      : "Physical Therapy"}{" "}
                  </Link>
                </li>
                <li>
                  <Link>{props.langs === "en" ? "الأشعة" : "Radiology"}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-2 ">
            <h5>{props.langs === "en" ? "ابحث عن طبيب" : "Find a Doctor"}</h5>
            <ul>
              <li>
                <Link>
                  {props.langs === "en"
                    ? "الأطباء الأعلى تقييمًا"
                    : "Top-Rated Doctors"}
                </Link>
              </li>
              <li>
                <Link>
                  {props.langs === "en"
                    ? "جدولة المواعيد"
                    : "Appointment Scheduling"}
                </Link>
              </li>
              <li>
                <Link>
                  {props.langs === "en" ? "مراجعات المرضى" : "Reviews"}
                </Link>
              </li>
              <li>
                <Link>
                  {props.langs === "en"
                    ? "ملفات تعريف الطبيب"
                    : "Doctor Profiles"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-2">
            <h5> {props.langs === "en" ? "معلومات عنا" : "About Us"}</h5>
            <ul>
              <li>
                <Link>
                  {" "}
                  {props.langs === "en"
                    ? "الأخبار والتحديثات"
                    : "News and Updates"}
                </Link>
              </li>
              <li>
                <Link> {props.langs === "en" ? "وظائف" : "Careers"}</Link>
              </li>
              <li>
                <Link>
                  {" "}
                  {props.langs === "en"
                    ? "مشاركة المجتمع"
                    : "Community Involvement"}
                </Link>
              </li>
              <li>
                <Link to={"/contact"}>
                  {" "}
                  {props.langs === "en" ? "اتصل بنا" : " Contact Us"}
                </Link>
              </li>
              <li>
                <Link to={"/faq"}>
                  {" "}
                  {props.langs === "en" ? "الأسئلة المتكررة" : "faq"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerimg">
          <div className="footer2">
            <img src={footer1} alt="..." />
          </div>
          <div className="footer1">
            <img src={footer2} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
