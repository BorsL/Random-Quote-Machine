'use client';

import React, { useState } from 'react'
import quotes from './quotes.json';

export default function Page() {
    const[index, setIndex] = useState(0);
    const quote = quotes[index].quote;
    const next = () => setIndex((index+1)%quotes.length);
    

    return (
      <div className='bg-teal-600'>
        <p className='bg-amber-700'>
          {quote}
        </p>
        <button onClick={next}>
          Inspire me again
        </button>
      </div>
    )
  }
