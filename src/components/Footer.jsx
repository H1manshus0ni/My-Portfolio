import React from 'react';

function Footer() {
  const handleEmailClick = () => {
    // Prevent default behavior (opening in browser's default email app)
    event.preventDefault();

    // Construct a well-formatted Gmail compose link
    const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=himanshuso912@gmail.com`;

    // Open the Gmail compose link in a new browser tab
    window.open(gmailComposeLink, '_blank');
  };

  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Himanshu Soni
      </a>
      <a
        href="#" // Set href to "#" to prevent initial navigation
        className="text-sm md:text-md hover:text-indigo-500"
        onClick={handleEmailClick}
      >
        himanshuso912@gmail.com
      </a>
      <p className="text-xs mt-2 text-gray-500">
        © Himanshu_Soni_Portfolio {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;