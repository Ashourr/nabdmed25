import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function Free(props) {
  let [show, setshow] = useState(true);
  let [text, settaxt] = useState("");
  let [conut, setcount] = useState([]);

  useEffect(() => {
    fetch("https://almutamayizun.videosep.com/api/top-side-banner")
      .then((res) => res.json())
      .then((data) => {
        settaxt(data.data[0]);
        setcount(data.data);
      });
  }, []);
  // console.log(text);
  return (
    <>
      {conut.length > 0 ? (
        <div className={`sectionfree ${props.langs}`}>
          <div className={show ? "free" : "free1"}>
            <div className="contac">
              {props.langs === "en" ? (
                <h6 dangerouslySetInnerHTML={{ __html: text.name_ar }} />
              ) : (
                <h6 dangerouslySetInnerHTML={{ __html: text.name }} />
              )}
            </div>
            <div className="x">
              <FontAwesomeIcon icon={faXmark} onClick={() => setshow(false)} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Free;
