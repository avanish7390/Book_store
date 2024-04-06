import React from "react";

const About = () => {
  return (
    <div className="  dark:bg-slate-800 dark:text-white" >
      <div className="md:w-1/2 mx-auto">
        <h1 className="text-2xl text-center mt-20">About Us</h1>
        <div className="hero min-h-screen ">
  <div className="hero-content  lg:flex-row">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-6xl font-bold">Box Office News!</h1>
      <p className="py-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default About;
