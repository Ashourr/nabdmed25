import React, { useEffect, useState } from "react";
import img1 from "../../imges/heder.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Modelhome(props) {
  let [show, setshow] = useState(false);
  let [model,setmodel]=useState("")
  function data(){
    fetch("https://almutamayizun.videosep.com/api/pop-up-banner")
    .then((res)=>res.json())
    .then((data)=>setmodel(data.data[0]))
  }
  useEffect(() => {
    data();
    setTimeout(() => {
      setshow(true);
    }, 5000);
  }, []);

  // console.log(model)
  return (
    <>
      {show ? (
        <div className="model">
          <div className= {`modelhome ${props.langs}`}>
            <FontAwesomeIcon icon={faXmark} className="icon" onClick={() => setshow(false)} />
            <div className="d-none d-sm-block">
              <img src={model.cover} alt="..." />
            </div>
            <div className="cont">
              <h5>{props.langs==="ar"?model.name:model.name_ar}</h5>
              <p>{props.langs==="ar"?model.description:model.description_ar}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modelhome;
