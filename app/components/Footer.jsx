import React from "react";
import Link from "next/link";
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <footer className=" py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm">© 2023 by Ethem KIZILYER.</p>
        <div className="flex items-center">
          <Link href="https://github.com/Ethemkizilyer" className="mx-2">
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ethem-kizilyer/"
            className="mx-2"
          >
            <BsLinkedin />
          </Link>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
