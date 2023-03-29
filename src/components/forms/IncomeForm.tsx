import React from "react";

const Form = () => {
  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="company"
                 className="block mb-2 text-sm font-medium text-gray-900 ">Company</label>
          <input type="text" id="company"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Flowbite" required/>
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone
            number</label>
          <input type="tel" id="phone"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="£ 26000" pattern="£ [0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
          <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">Website
            URL</label>
          <input type="url" id="website"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="flowbite.com" required/>
        </div>
        <div>
          <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Unique
            visitors (per month)</label>
          <input type="number" id="visitors"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="" required/>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email
          address</label>
        <input type="email" id="email"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
               placeholder="john.doe@company.com" required/>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" value=""
                 className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                 required/>
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">I agree with
          the <a href="#" className="text-blue-600 hover:underline ">terms and
            conditions</a>.</label>
      </div>
      <button type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit
      </button>
    </form>

  )
}

export default Form;