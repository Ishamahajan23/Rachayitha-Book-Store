import { useParams } from 'next/navigation'
import React from 'react'

const contact = () => {
  // get id from the url
    const { id } = useParams()
    console.log(id)
  return (
   // create a contact page using tailwind css
    <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
            <form className="mt-4">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800">Message</label>
                <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md">Send</button>
            </form>
        </div>
    </div>
    
  )
}

export default contact