import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./about.css";
function About(props) {
  let [about, setabout] = useState([]);
  useEffect(() => {
    fetch("https://almutamayizun.videosep.com/api/about")
      .then((res) => res.json())
      .then((data) => setabout(data.data[0]));
  }, []);

  return (
    <div className="container-lg">
      <div className={`about ${props.langs}`}>
        <div className="row"> 
          <div className="col-12 col-md-6 img">
            <div className="imgdiv">
            <img
              src={about.cover}
              alt="..."
            />
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3">
            <div className={`contant ${props.langs}`}>
              <div className={`first-div ${props.langs}`}>
                <FontAwesomeIcon icon={faStar} className="icon" />
                <p className={`${props.langs}`}>
                  {props.langs === "ar"
                    ? "Rated #1 for appointments with many professional doctors"
                    : "مُصنف كخيار رقم 1 للمواعيد مع العديد من الأطباء المحترفين"}
                </p>
              </div>
              <h4>{props.langs === "ar" ? about.name : about.name_ar}</h4>
              <h6>
                {props.langs === "ar"
                  ? about.description
                  : about.description_ar}
              </h6>
              <div className="num">
                <div className="num1">
                  <h5>40+</h5>
                  <p>
                    {props.langs === "ar" ? "Dedicated Doctors" : "طبيب مخصص"}
                  </p>
                </div>
                <div className="num2">
                  <h5>10k+</h5>
                  <p>
                    {props.langs === "ar"
                      ? "Hours of patient Consultation"
                      : "ساعات من استشارات المرضى"}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
