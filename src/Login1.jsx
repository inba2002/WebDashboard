import React from 'react'
import Cover from './Assets/cover.jpg'
import Google from './Assets/googlelogo.png'

const Login1 = () => {
  return (
    <div class="w-full h-screen flex items-start' bg-gray-100">
      <div
        class="w-full relative flex flex-col bg-gradient-to-r from-transparent to-cyan-500  md:flex-row md:space-y-0"
      >
        
        <div class="flex flex-col justify-center p-8 md:p-14">
          <span class="mb-3 text-4xl font-bold">Welcome back</span>
          <span class="font-regular text-gray-600 mb-8">
            Welcome back! Please enter your details
          </span>
          <div class="py-4">
            <span class="mb-2 text-md">Username</span>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="uname"
              id="uname"
            />
          </div>
          <div class="py-4">
            <span class="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div class="flex justify-between w-full py-4">
            <div class="mr-24">
              <input type="checkbox" name="ch" id="ch" class="mr-2" />
              <span class="text-md">Remember Me</span>
            </div>
            <span class="font-bold text-md cursor-pointer">Forgot password</span>
          </div>
          <button
            class="w-full font-bold bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-blue-300"
          >
            Sign in
          </button>
          {/* <button
            class="w-full border border-gray-300 text-md font-bold py-1.5 rounded-lg mb-6 hover:bg-blue-400 hover:text-white"
          >
            <img src={Google} alt="img" class="w-7 h-7 inline mr-2" />
            Sign in with Google
          </button>
          <div class=" font-regular text-center text-gray-900">
            Dont'have an account?
            <span class="font-bold text-black cursor-pointer">Sign up for free</span>
          </div> */}
        </div>
        
        <div class="relative">
          <img
            src={Cover}
            alt="img"
            class="bg-cover w-screen h-screen rounded-l-lg obje md:block object-cover"
          />
          
         
        </div>
      </div>
    </div>
  )
}

export default Login1
