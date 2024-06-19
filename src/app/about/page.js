import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 bg-black-100"> {/* Container with pink background */}
      <h1 className="text-3xl font-red text-center mb-4 text-pink-700">All About Me</h1> {/* Centered heading with pink color */}
      <p className="text-black-700 leading-loose text-center">  {/* Centered paragraph with gray text */}
        My name is Tiffany Sharpe. I am a Fullstack Developer with a strong passion
        for creating developing websites. I am always eager and willing to learn. I work each project until it is complete and functional.
      </p>
      <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">Tiffany Skills</h2> {/* Centered skills heading with purple color */}
      <ul className="list-disc pl-4 mx-auto"> {/* Centered unordered list with disc and padding */}
        <li className="text-white-700 mb-2 text-purple-500">Javascript</li>  {/* List item with purple text */}
        <li className="text-white-700 mb-2 text-pink-500">CSS</li>
        <li className="text-white-700 mb-2 text-green-500">Bootstrap</li>
        <li className="text-white-700 mb-2 text-purple-500">Troubleshooting</li>
        <li className="text-white-700 mb-2 text-pink-500">Networking</li>
        <li className="text-white-700 mb-2 text-green-500">Security</li>
        <li className="text-white-700 mb-2 text-purple-500">Hardware</li>
      </ul>
    </div>
  );
}