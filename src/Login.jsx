import React from 'react'
import Cover from './Assets/cover.jpg'
import Google from './Assets/googlelogo.png'

const Login = () => {
  return (
    <div className='w-full min-h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        {/* <div className='absolute top-[25%] left-[10%] flex flex-col'>
            <h1 className='text-4xl text-white font-bold my-4'>WAD</h1>
            <p className='text-xl text-white font-normal'>Strart Tech 1.4</p>
        </div> */}
        <img className={`bg-[url(./Assets/cover.jpg)] bg-cover h-screen`}/>
      </div>

      <div className='w-1/2  h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
        <h1 className='w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto'>Trust Your Assisstance</h1>
        <div className='w-full flex flex-col max-w-[500px]'>
            <div className='w-full flex felx-col  mb-2'>
                <h3 className='text-3xl font-semibold mb-3.5'>Login</h3>
                <p className='text-base mb-3.5'>Welcome! Please Enter Your Details.</p>
            </div>
            <div className='w-full flex flex-col'>
                <input type="text" placeholder='Username' className='w-full text-black py-2 my-2 bg-tansparent border-b border-black outline-none focus:outline-none' />
                <input type="password" placeholder='Password' className='w-full text-black py-2 my-2 g-tansparent border-b border-black outline-none focus:outline-none' />
            </div>
            <div className='w-full flex items-center justify-between'>
                <div className='w-full flex items-center'>
                    <input type="checkbox" className='w-4 h-4 mr-2' />
                    <p className='text-sm'>Remember Me</p>
                </div>
                <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password ?</p>
            </div>
            <div className='w-full flex flex-col my-4'>
                <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>Log In</button>
                <button className='w-full text-[#060606] my-2 font-semibold bg-white border-1 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>Sign Up</button>
            </div>
            <div className='w-full flex items-center justify-center relative py-2'>
                <div className='w-full h-[1px] bg-black/40'></div>
                <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
            </div>
            <div className='w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'><img src={Google} className='h-6 mr-2' />Sign In with Google</div>
        </div>
        <div className='w-full flex items-center justify-center'>
            <p className='text-sm font-normal text-[#060606]'>Dont have a account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign Up</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
