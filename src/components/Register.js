import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const navigateToView = () => {
    console.log(details);
    navigate("/view", { state: details });
  };

  const [details, setDetails] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    address: "",
    phone: "",
    state: "",
    country: "",
    accept: "",
  });

  const enterDetail = (e) => {
    var fieldname = e.target.name;
    var fieldvalue = e.target.value;

    if (fieldname === "accept") {
      fieldvalue = e.target.checked ? "Accepted" : "Not yet";
    }

    var prevState = { ...details };

    prevState[fieldname] = fieldvalue;
    setDetails(prevState);
    // console.log(fieldvalue);
    // console.log(fieldname);
    console.log(details);
  };

  return (
    <div className="reg">
      <div className="regheding">
        <h3>Register</h3>
        <hr />
      </div>

      <div className="form-wrapper">
        <div className="name-wrapper square">
          <label  htmlFor="name">Name</label><br/>
          <input type={"text"} name="name" onChange={enterDetail}></input>
        </div>

        <div className="email-wrapper square">
          <label htmlFor="email">Email</label><br/>
          <input type={"email"} name="email" id="email" onChange={enterDetail}></input>
        </div>

        <div className="dob-wrapper square">          
          <label htmlFor="dob">DOB</label><br/>
          <input type={"date"} name="dob" onChange={enterDetail}></input>
        </div>

        <div className="adr-wrapper square">
          <label htmlFor="address">Address</label><br/>
         <input type={"text"} name="address" onChange={enterDetail}></input>
        </div>

        <div className="num-wrapper square">
          <label htmlFor="phone">Phone</label><br/>
          <input type={"number"} name="phone" onChange={enterDetail}></input>
        </div>

        <div className="state-wrapper square">
            <label htmlFor="state">State</label><br/>
          <select name="state" onChange={enterDetail}>
            <option>select</option>
            <option value="kerala">Kerala</option>
            <option value="karnataka">Karnataka</option>
            <option value="tamilnadu">Tamilnadu</option>
          </select>
        </div>

        <div className="country-wrapper square">
          <label htmlFor="country">Country</label><br/>
          <select name="country" onChange={enterDetail}>
            <option>select</option>
            <option value="India">India</option>
            <option value="Chine">China</option>
            <option value="London">London</option>
          </select>
        </div>

        <div className="gender-wrapper square">
          <label>Gender</label><br/>
          <p htmlFor="gender">Female</p>
            <input type={"radio"} name="gender" value="Female" onChange={enterDetail}></input>
          <p htmlFor="gender">Male</p>
            <input type={"radio"} name="gender" value="Male" onChange={enterDetail}></input>
        </div>



        <div className="check-wrapper">
          <input type={"checkbox"} name="accept" id="accept" onChange={enterDetail}></input>
          <p htmlFor="accept">Accept all terms and conditions</p>
        </div>

        <button className="btn2" onClick={navigateToView}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
