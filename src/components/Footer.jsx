import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white text-center py-6 mt-10 rounded-lg">
      
      <p className="text-lg font-semibold mb-4">
        Created by Himanshu Raj Vaishnav
      </p>

      <div className="flex justify-center gap-6 text-4xl">

        <a
          href="https://www.instagram.com/himanshu_raj_vaishnav?igsh=eHpzemhocm81OHF0"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 transition hover:scale-125"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/himanshu-raj-vaishnav-a09962363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition hover:scale-125"
        >
          <FaLinkedin />
        </a>

      </div>

    </footer>
  );
}

export default Footer;