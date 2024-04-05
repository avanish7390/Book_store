import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data);
      return (
        <>
             <div className="card w-100 mt-20 glass  image-full">
             <figure><img src="https://www.shutterstock.com/image-photo/contact-us-customer-support-hotline-600nw-2067737414.jpg" alt="car!" /></figure>
             <div className="card-body">
            <div className=' flex h-screen items-center justify-center  '>
                <div  className=" w-[300px]">
                    <div className="">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        
                        <h3 className="font-bold text-lg items-center ">CONTACT US</h3>
                        {/* name*/}
                        <div className='mt-4 space-y-2'>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type='text' placeholder='Enter your Name' className='w-80 px-3 py-1 border-[3px] rounded-md outline-none' 
                                {...register("name", { required: true })}/>
                                <br />
                              {errors.name && (
                               <span className="text-sm text-red-500">
                                 Name is required
                                </span>
                                   )}
                            </div>
                            <br/>
                            <span>Email</span>
                            <br />
                            <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border-[3px]  rounded-md outline-none'
                            {...register("email", { required: true })} />
                             <br />
                              {errors.email && (
                               <span className="text-sm text-red-500">
                                 Email is required
                                </span>
                                   )}
                        </div>
                        {/* Message*/}

                        <div className='mt-4 space-y-2'>
                            <span>Message</span>
                            <br />
                            <textarea className="textarea textarea-info w-80 px-3 py-1 border-[3px]rounded-md outline-none" placeholder="Enter your Message"
                            {...register("message", { required: true })} />
                           
                            <br />
                              {errors.message && (
                               <span className="text-sm text-red-500">
                                 Message is required
                                </span>
                                   )}
                        </div>
                        {/* buttom */}
                        <div className='flex justify-around mt-4'>
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">SUBMIT</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        
  </div>
  </div>

  </>
  )
}

export default Contact

