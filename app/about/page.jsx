import React from "react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="flex flex-col sm:flex-row ">
    <div className="flex flex-col items-center justify-center min-h-screen m-auto sm:w-[50%] p-8">
      <h1 className="text-3xl font-bold  mb-4">About me</h1>
      <div className="">
        <p className="text-lg leading-relaxed">
          Hi, my name is Ethem and I'm a frontend developer based in Turkey.
        </p>
      </div>
    </div>
    <div className="sm:w-[50%] m-auto py-8 border-t border-gray-300 text-center">
  <p className="text-lg leading-relaxed">
    This app was created using{" "}
    <Link href="https://www.themoviedb.org/" className="text-yellow-500 hover:text-yellow-600">
      "The movie Database"
    </Link>{" "}
    API.
  </p>
  <p className="mt-4 text-sm">
    Technologies I used:
    <ul className="list-disc pl-4 mt-2 text-left">
      <li>React</li>
      <li>NexJS 13</li>
      <li>Tailwind CSS</li>
    </ul>
  </p>
</div>
    </div>
  );
}

export default About;