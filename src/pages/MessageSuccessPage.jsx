import React, { useEffect } from "react";
import Lottie from "lottie-react";
import successAnimationData from "../assets/Animation/Animation - 1727627516570.json"; // Lottie animation JSON file
import { useNavigate } from "react-router-dom";

export const MessageSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <div className="mb-4">
          <Lottie
            animationData={successAnimationData}
            loop={false}
            autoplay={true}
            style={{ height: 150, width: 150 }}
          />
        </div>
        <h2 className="text-3xl font-bold text-richblack-5 text-black">
          Thank you!
        </h2>
        <p className="text-xl text-richblack-50 text-black">
          Your message has been sent successfully.
        </p>
      </div>
    </>
  );
};
