import React, { useState } from "react";
import "./Form.css"
import img from "../../images/userdetail.jpeg"

export default function Form() {
    const[detail,setDetail]=useState({
        name:"",
        email:"",
        contactnumber:"",
        jobtitle:"",
        salary:""
    })
    let name,value;
    const handleInput = (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setDetail({...detail,[name]:value})

    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const{name,email,contactnumber,salary,jobtitle}=detail;
        const res = await fetch("http://localhost:3001/user/details", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            contactnumber: contactnumber,
            salary: salary,
            jobtitle: jobtitle,
          }),
        });
        const data =await res.json();
        if (data.status===400){
            window.alert("error")
        }
        else{
            window.alert("Details successfully saved!")
        }
    }
  return (
    <div className="card">
      <div className="signupImg">
        <img src={img} alt="" />
      </div>
      <div className="signupForm">
        <h1>Details Form</h1>
        <div>
          <label className="username" htmlFor="username">
            NAME
          </label>
          <input
            type="text"
            value={detail.name}
            name="name"
            onChange={handleInput}
            id="name"
            required
            placeholder="Enter your name"
          />
          <label className="email" htmlFor="email">
            EMAIL
          </label>
          <input
            type="text"
            value={detail.email}
            name="email"
            id="email"
            onChange={handleInput}
            required
            placeholder="Enter your email"
          />
          <label className="phnumber" htmlFor="phnumber">
            CONTACT NUMBER
          </label>
          <input
            type="number"
            value={detail.contactnumber}
            name="contactnumber"
            onChange={handleInput}
            id="contactnumber"
            required
            placeholder="Enter your contact number"
          />
          <label className="email" htmlFor="email">
            JOB TITLE
          </label>
          <input
            type="text"
            name="jobtitle"
            id="jobtitle"
            onChange={handleInput}
            value={detail.jobtitle}
            required
            placeholder="Enter your desired job title"
          />
          <label className="email" htmlFor="email">
            SALARY
          </label>
          <input
            type="text"
            name="salary"
            value={detail.salary}
            onChange={handleInput}
            id="salary"
            required
            placeholder="Enter your salary"
          />
          <button className="signupbtn" onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
