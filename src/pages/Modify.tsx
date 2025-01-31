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
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-800">
    <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Modify Quotes</h1>

    {/* Form */}
    <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
      <div className="mb-4">
        <label htmlFor="quote" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
          New Quote
        </label>
        <textarea
          id="quote"
          required
          className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:text-white"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
          Author
        </label>
        <textarea
          id="author"
          required
          className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Add Quote
      </button>
    </form>

    {/* Quote List */}
    <ul className="w-full max-w-lg mt-8 space-y-4">
      {frase.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center p-4 bg-gray-50 border rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600"
        >
          <div className="text-gray-800 dark:text-white">
            <p className="text-lg font-semibold">"{item.quote}"</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">- {item.author}</p>
          </div>
          <button
            onClick={() => deleteItem(item.id)}
            className="px-4 py-2 text-sm font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div> 
    
  )
}