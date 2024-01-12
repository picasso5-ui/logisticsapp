import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
// import Select from 'react-select';

const countryCodes = [

];
const Verify = () => {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const a = document.getElementById('choose')
    console.log(a.value + phoneNumber);
    setTimeout(()=>{
      navigate('/userpage')
    },1000)


  };
  return (
    <div className="container verify-parent">
      <div>
      <img src={logo} className="circle" />
        <h6 className="fw-bold" style={{ color: "#000" }}>
          HelpYours!
        </h6>
      </div>
      <div className="d-flex verifyinputparnet mt-5 mb-4 ">
        <form action="" onSubmit={handleSubmit} >
          <select name="Choose" id="choose" onChange={(e)=>selectedCountryCode(e.target.value)}>
            <option value="+91">Ind: + 91</option>
            <option value="+92">Ame: + 92</option>
            <option value="+93">Chi: + 93</option>
            <option value="+94">USA: + 94</option>
            <option value="+94">NIG: + 234</option>
          </select>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) =>setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
            className="py-2 px-3 ml-2"
          />
          {/* <div className="verify-div">+91</div>
          <input
            type="text"
            name="tel"
            id="tel"
            placeholder="Enter Your Mobile no."
            onChange={(e) => setNumber(e.target.value)}
            className="verifyinput"
          /> */}
          <div className="verifybtn-parent">
            <button className="verifybtn" type="submit">Verify</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
