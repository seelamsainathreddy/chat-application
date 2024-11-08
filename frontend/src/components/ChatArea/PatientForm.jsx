import React from 'react'

const PatientForm = ({setDietPlan}) => {
    
  return (
        <div className="mt-6 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg ml-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Patient Information</h2>
          <form className="space-y-4">
            {/* Name Field */}
            <div className='flex items-center'>
              <label htmlFor="Name :" className="w-1/3 block text-sm font-medium text-gray-700 mr-3 ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter patient's name"
                className="w-2/3 mt-1 block  px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
    
            {/* Calorie Intake Field */}
            <div className='flex  items-center'>
              <label htmlFor="calories" className="w-1/3 block text-sm font-medium text-gray-700 mr-3">
                Calorie Intake
              </label>
              <input
                type="number"
                id="calories"
                name="calories"
                placeholder="Enter daily calorie intake"
                className="w-2/3 mt-1 block px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
    
            {/* Protein Intake Field */}
            <div className='flex  items-center'>
              <label htmlFor="protein" className="w-1/3 block text-sm font-medium text-gray-700 mr-3">
                Protein Intake (grams)
              </label>
              <input
                type="number"
                id="protein"
                name="protein"
                placeholder="Enter daily protein intake"
                className="w-2/3 mt-1 block  px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
    
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Get Diet Plan
              </button>
            </div>
          </form>
        </div>
      );
}

export default PatientForm