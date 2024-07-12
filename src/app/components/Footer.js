import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8" id='contact'>
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-white">Sunrise Sips</h3>
          <p className="text-sm mt-2">Your daily dose of inspiration.</p>
        </div>
        <div className="flex flex-col md:flex-column items-center">
          <p className="text-sm font-medium">Contact Us:</p>
          <div className="flex flex-col md:flex-row items-start mt-2 md:mt-0">
            <p className="text-sm">Email: contact@sunrisesips.com</p>
            <p className="text-sm md:ml-4">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div>
          <p className="text-sm">&copy; 2024 Sunrise Sips. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
    
  )
}
