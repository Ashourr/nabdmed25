import "./specialtiesanddoctors.css";
import {
  faChevronLeft,
  faLeftLong,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Doctors from "./Doctors";

function SpecialtiesAndDoctors(props) {
  let [servicse, setservicse] = useState([]);
  let [search, setsearch] = useState("");

  useEffect(() => {
    fetch("https://almutamayizun.videosep.com/api/servicse")
      .then((res) => res.json())
      .then((data) => setservicse(data.data));
  }, []);

  // تصفية التخصصات بناءً على قيمة البحث بالعربية أو الإنجليزية
  const filteredServices = search
    ? servicse.filter(
        (servic) =>
          servic.name.toLowerCase().includes(search.toLowerCase()) ||
          servic.name_ar.includes(search) // البحث بالعربية
      )
    : servicse; // عرض الكل إذا كانت قيمة البحث فارغة

    let navigate = useNavigate();
    let goback = () => {
      navigate(-1);
    };
  return (
    <div className="container">
      <div className={`specialtiesanddoctors ${props.langs}`}>
        <Link onClick={goback}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`back ${props.langs}`}
          />{" "}
          {props.langs === "ar" ? "Back" : "رجوع"}
        </Link>
        {props.langs === "en" ? (
          <h5>استشارات افتراضية</h5>
        ) : (
          <h5>Virtual Consultations</h5>
        )}
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="icon1" />
          <input
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder={
              props.langs === "ar"
                ? "Search for Specialties"
                : "البحث في التخصصات"
            }
          />
          <FontAwesomeIcon icon={faSliders} className="icon2" />
        </div>
        <div className="specialties">
          {/* <h6>Specialties</h6> */}
          {props.langs === "en" ? <h6>التخصصات</h6> : <h6>Specialties</h6>}
          <div className="specialties-itmes">
            <div className="row">
              {filteredServices.length > 0 ? (
                filteredServices.map((servic) => (
                  // to={`/specialties/${servic.slug}`}
                    <div
                      className="col-6 col-sm-4 col-md-3 col-lg-2 specialtie"
                      key={servic.slug}
                    >
                  <Link to={`/Servicesdoctorpage/${servic.slug}`  } >
                      <div className="specialties-itme">
                        <div>
                          <img src={servic.cover} alt="..." />
                        </div>
                        {props.langs === "en" ? (
                          <p>{servic.name_ar}</p>
                        ) : (
                          <p>{servic.name}</p>
                        )}
                      </div>
                  </Link>
                    </div>
                ))
              ) : (
                <p>{props.langs === "en" ? "لا توجد تخصصات" : "No Specialties"}</p>
              )}
            </div>
          </div>
          <Doctors langs={props.langs} />
        </div>
      </div>
    </div>
  );
}

export default SpecialtiesAndDoctors;
