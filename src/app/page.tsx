import React from 'react'

const page = () => {
  return(
    <figure className="md:flex bg-pink-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/rehan.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium bg-red-400 py-10 ps-10 text-white border-2">
          “Muhammad Rehan is a dedicated and industrious individual known for his strong work ethic and commitment to excellence. He consistently demonstrates a proactive approach, tackling challenges with determination and perseverance. His hard work and reliability make him a valuable asset in any team or project.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400 bg-white bg-cover text-center">
          Muhammad Rehan
        </div>
        <div className="text-slate-700 dark:text-slate-500 text-red-500 bg-green-200 text-center">
          Staff Engineer, Pakistan
        </div>
      </figcaption>
    </div> 
  </figure>
  
  )
}

export default page  