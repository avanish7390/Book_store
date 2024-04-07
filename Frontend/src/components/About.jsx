import React from 'react';

const AboutPage = () => {
  return (
    <div className=" min-h-screen py-20  dark:bg-slate-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-8">
          <div className="flex-shrink-0 w-64 h-64 rounded-full overflow-hidden animate-pulse">
            <img src="https://img.freepik.com/free-photo/serious-guy-excited-with-interesting-book-story_1262-19021.jpg?w=900" alt="Team" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-700  dark:bg-slate-800 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra luctus urna, ac sagittis arcu finibus quis. Donec eu dolor condimentum, tincidunt metus at, varius nulla.
            </p>
            <p className="text-lg text-gray-700 mt-4  dark:bg-slate-800 dark:text-white">
              Phasellus in enim in nulla viverra vehicula. Ut tempus feugiat mi sit amet bibendum. Nulla nec odio nec urna tincidunt ultrices.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4  dark:bg-slate-800 dark:text-white">Our Mission</h2>
          <p className="text-lg text-gray-700  dark:bg-slate-800 dark:text-white">
            We are committed to providing innovative solutions that empower businesses and individuals to thrive in the digital world.
          </p>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4  dark:bg-slate-800 dark:text-white">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img src="https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144128.jpg?w=900&t=st=1712510227~exp=1712510827~hmac=5ad205f108fd28e0ab3d309773546f6174726fbc63f48b862ac0555f7b3f2421" alt="Team Member" />
              </div>
              <h3 className="text-lg font-semibold  dark:bg-slate-800 dark:text-white">John Doe</h3>
              <p className=" dark:bg-slate-800 dark:text-white ">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img src="https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?w=900&t=st=1712510247~exp=1712510847~hmac=9e2d68865301e12ce625e3809f65e31efa534e7aa336c6f6e53c38b32f4a5e48" alt="Team Member" />
              </div>
              <h3 className="text-lg font-semibold  dark:bg-slate-800 dark:text-white">Jane Smith</h3>
              <p className=" dark:bg-slate-800 dark:text-white">Head of Design</p>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img src="https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?w=900&t=st=1712510247~exp=1712510847~hmac=9e2d68865301e12ce625e3809f65e31efa534e7aa336c6f6e53c38b32f4a5e48" alt="Team Member" />
              </div>
              <h3 className="text-lg font-semibold  dark:bg-slate-800 dark:text-white">Michael Johnson</h3>
              <p className=" dark:bg-slate-800 dark:text-white">Lead Developer</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-auto transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-700">We are committed to delivering high-quality products and services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-auto transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-700">We embrace innovation and constantly seek new ways to improve.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-auto transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Collaboration</h3>
              <p className="text-gray-700">We believe in the power of collaboration and teamwork.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
