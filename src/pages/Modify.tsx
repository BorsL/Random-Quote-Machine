'use client';

import React, {useState} from 'react'
import quotes from './quotes.json';

export default function Modify(){
    const [frase, setFrase] = useState(quotes);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Extract values from the form
      const quoteInput = (event.target as HTMLFormElement).elements.namedItem('quote') as HTMLTextAreaElement;
      const authorInput = (event.target as HTMLFormElement).elements.namedItem('author') as HTMLTextAreaElement;
  
      const quote = quoteInput.value.trim();
      const author = authorInput.value.trim();
  
      // Validate inputs
      if (!quote || !author) {
        alert('Both fields are required!');
        return;
      }
  
      // Add the new quote
      addItem(quote, author);
  
      // Clear the form fields
      quoteInput.value = '';
      authorInput.value = '';
    }

    function deleteItem(itemId: number) {
      setFrase(frase.filter(e=>e.id!==itemId))
    }

    function addItem(x: string, y: string){
      setFrase([
        ...frase,
        {
          id: frase.length + 1,
          quote: x,
          author: y,
        }
      ])
    }
  
  return (
    <div className="bg-amber-700">
        test uno
    </div>
    
  )
}