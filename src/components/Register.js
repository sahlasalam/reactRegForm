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

      <div>
        <div className="h1">
          <h5 htmlFor="name">Name</h5>
          <input type={"text"} name="name" onChange={enterDetail}></input>
          <h5 htmlFor="email">Email</h5>
          <input
            type={"email"}
            name="email"
            id="email"
            onChange={enterDetail}
          ></input>
        </div>
        <div className="h2">
          <h5>Gender</h5>
          <p htmlFor="gender">F</p>
          <input
            type={"radio"}
            name="gender"
            value="Female"
            onChange={enterDetail}
          ></input>
          <p htmlFor="gender">M</p>
          <input
            type={"radio"}
            name="gender"
            value="Male"
            onChange={enterDetail}
          ></input>
          <h5 htmlFor="dob">DOB</h5>
          <input type={"date"} name="dob" onChange={enterDetail}></input>
        </div>
        <div className="h3">
          <h5 htmlFor="address">address</h5>
          <input type={"text"} name="address" onChange={enterDetail}></input>
        </div>
        <div className="h4">
          <h5 htmlFor="phone">Phone</h5>
          <input type={"number"} name="phone" onChange={enterDetail}></input>
          <h5 htmlFor="state">State</h5>
          <select name="state" onChange={enterDetail}>
            <option>select</option>
            <option value="kerala">Kerala</option>
            <option value="karnataka">Karnataka</option>
            <option value="tamilnadu">Tamilnadu</option>
          </select>
          <h5 htmlFor="country">Country</h5>
          <select name="country" onChange={enterDetail}>
            <option>select</option>
            <option value="India">India</option>
            <option value="Chine">China</option>
            <option value="London">London</option>
          </select>
        </div>
        <div className="h5">
          <input
            type={"checkbox"}
            name="accept"
            id="accept"
            onChange={enterDetail}
          ></input>
          <h5 htmlFor="accept">Accept all terms and conditions</h5>
        </div>
        <button className="btn2" onClick={navigateToView}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
