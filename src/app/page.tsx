'use client';

import React, { useState } from 'react'
import Link from 'next/link';
import quotes from '@/pages/quotes.json';
import { AiFillEdit } from "react-icons/ai";
import Modify from '@/pages/Modify';

export default function App() {
    const[index, setIndex] = useState(0);
    const quote = quotes[index].quote;
    const author = quotes[index].author;
    const next = () => setIndex((index+1)%quotes.length);

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
        
        {/* QUOTES BOX */}
        <div className="relative max-w-lg p-8 bg-white rounded-lg shadow-md dark:bg-gray-900">
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-300">Quote of the day</h1>
          <div className="absolute top-0 left-0 w-4 h-4 rounded-tl-lg border-t-4 border-l-4 border-slate-500"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 rounded-br-lg border-b-4 border-r-4 border-slate-500"></div>
          
          <div className="my-6">
            <p className="text-3xl font-bold text-gray-700 dark:text-white">" {quote}</p>
            <p className="mt-4 text-left text-lg font-semibold text-gray-800 dark:text-gray-200">- {author} -</p>
          </div>

          {/* BUTTONS */}
          
          <div
              className="absolute bottom-[-3rem] right-4 flex space-x-3"
            >
              {/* First Button */}
                <button
                  onClick={() => (window.location.href = "./Modify")}
                  className="flex items-center justify-center px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-red-300">
                  <AiFillEdit className="w-4 h-5" />
                </button>
              
              {/* Second Button */}
              <button
                onClick={next}
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Inspire me again
              </button>
            </div>
        </div>
      </div>
    );
}
