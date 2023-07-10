import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import img11 from "../../images/finprofile.png"
import "./Details.css"
const Details = () => {
    const[products,setProducts]=useState("");
       useEffect(() => {
         const fetchdata=async () =>{
            const data = await axios.get(
              "http://localhost:3001/user/getuserdetails"
            );
            setProducts(data);
            console.log(data);
         };
         fetchdata();

       },[]);
  return (
    <div className='maindiv'>
        <h1>Details of all the registered users.</h1>
      {" "}
      <div className="body1">
        {products &&
          products?.data.details.map((item) => (
            <div className="card1">
              <div className="cardimage">
                <img
                  src={img11}
                  alt="img not available"
                  className="cardimage"
                ></img>
              </div>
              <div className="classcontent">
                <p className="name">{item.name}</p>
                <p className="followers1">{item.email}</p>
                <p className="followers1">{item.contactnumber}</p>
                <p className="followers1">{item.jobtitle}</p>
                <p className="followers1">{item.salary}</p>
                <button className="followbutton">View Profile</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Details
