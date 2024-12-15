import React from "react";
import Lottie from "lottie-react";
import successAnimationData from "../assets/Animation/Animation - 1727627516570.json"; // Lottie animation JSON file

export const MessageSuccessPage = () => {
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
