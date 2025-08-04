import React from 'react'
import {useNavigate}  from 'react-router-dom';

const SignupOTP = () => {
    const Navigation = useNavigate();
    const OTP = 888888;
    const handleEvent = async()=>{
        const otpInput = document.getElementById("otpInput");
        if(otpInput == OTP){
            console.log("Otp veried");
            Navigation("/");
        }else{
            console.log("otp not verified");
        }
    }
  return (
    <>
    <div className="SignupOTP">
        <div className="SignupEmail"></div>
        <div className="OTP">
            <input type="number" id="otpInput" />
            <button type="submit" onSubmit={handleEvent}>Verify</button>
        </div>
    </div>
    </>
  )
}

export default SignupOTP