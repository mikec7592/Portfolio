"use client";
import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from "next/image"
import profilePic from '../public/images/profilePic.jpg'
import p1_2 from '../public/images/p1_2.png'
import p2_0 from '../public/images/p2_0.png'
import p2_1 from '../public/images/p2_1.png'
import p3_1 from '../public/images/p3_1.png'
import p4_1 from '../public/images/p4_1.png'
import p1_1 from '../public/images/p1_1.png'
import { useState } from "react"


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Michael Clark Portfolio</title>
        <meta name='description' content='Generated by create react app'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
       <main className="  bg-white px-10 md:px-20 lg:px40 dark:bg-slate-700" >
        <section className=" min-h-screen"> 
          <nav className=" pt-10 mb-12 flex justify-between">
            <h1 className="text-xl" >Made_By_Mike</h1>
            <ul className=" flex items-center">
              <li></li>
              <li> <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" /> </li>
              <li><a className=" bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-2 rounded ml-4" href="https://www.linkedin.com/in/mikec7592/" target="_blank">Linkedin</a></li>
              <li><a className=" bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-2 rounded ml-4" href="https://github.com/mikec7592" target="_blank">Github</a></li>
              <li> <a className=" bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-2 rounded ml-4"  href="https://docs.google.com/document/d/1Hg68jaXr8BRMPA78mxIa4OKodkfbKfp_BrumnKjrFb0/edit?usp=sharing" target="_blank">Resume</a></li>
            </ul>
          </nav>
          <div className=" p-3 text-center" >
            <h2 className=" py-2 text-5xl text-teal-600 font-medium md:text-6xl dark:text-emerald-500" >Michael Clark</h2>
            <h3 className=" text-2xl py-2 md:text-3xl" >Full-Stack Engineer</h3>
            <p className=" text-md py-2 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto dark:text-black" >Aspiring engineer with a dream to one day help guide and mentor other budding engineers!  </p>
          </div>
          <div className=" text-5xl flex justify-center pt-3 text-emerald-500"> 
            <a href="https://www.linkedin.com/in/mikec7592/" target="_blank" className=" mx-10" > <AiFillLinkedin/> </a>
            <a href="https://github.com/mikec7592" target="_blank" className=" mx-10"> <AiFillGithub/> </a>
          </div>
          <div className=" relative rounded-full w-80 h-80 my-5 mx-auto overflow-hidden md:h-80 md:w-80" >
            <Image src={profilePic}  />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center" >Skills & Training</h3>
            <p className=" text-md py-2 leading-8 text-gray-700 md:text-l max-w-3xl mx-auto dark:text-black"  >Completed <span className=" text-teal-600 dark:text-emerald-500" >General Assemblys</span> software engineering bootcamp where I recieved extensive training in Full-Stack development with a certificate for my accomplishments.  I also recieved extensive Front-end industry training from my time at <span className=" text-teal-600 dark:text-emerald-500" >Brainnest Consulting</span> and recieved a certifcate of my accomplishments upon my departure from them.  I am most comfortable using <span className=" text-teal-600 dark:text-emerald-500" >Javascript & Node</span> but I do have experience with <span className=" text-teal-600 dark:text-emerald-500" >Python</span> as well as some exposure to <span className=" text-teal-600 dark:text-emerald-500" >Java</span>.  All of my work is <span className=" text-teal-600 dark:text-emerald-500" >responsive and mobile friendly</span> including this page.  </p>
            <p className=" text-md py-2 leading-8 text-center text-gray-700 dark:text-black" >Check out some of my projects and their git repos by <span className=" text-teal-600 dark:text-emerald-500" >clicking</span> below.</p>
          </div>
          <div className=" lg:flex gap-10" > 
          <a href="https://github.com/mikec7592/yelpHikes" target="_blank" >
            <div className=" hover:animate-pulse  text-center shadow-lg p-5 rounded-xl my-10 bg-slate-100 dark:bg-slate-800"  >
              <Image className=" mx-auto my-auto py-2" src={p1_1} width={100} height={100} />
              <h3 className=" pb-4 font-bold">YelpHikes</h3>
              <p>
                A hike rating app where a user can rate and create hikes as well as upload images for a specific hike and leave a review for other users to see. 
              </p>
              <h4 className=" py-4 text-teal-600 dark:text-emerald-500">Some technologies used:</h4>
              <p className="py-1 text-gray-700 dark:text-gray-400">Javascript</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">Nodejs</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">Express/MongoDB/Cloudinary</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">BCrypt/salt+hash</p>
            </div>
          </a>
          <a href="https://github.com/mikec7592/resume_builder-frontend" target="_blank">
            <div className=" hover:animate-pulse text-center shadow-lg p-5 rounded-xl my-10 bg-slate-100 dark:bg-slate-800" >
              <Image className=" mx-auto py-4" src={p3_1} width={200} height={200} />
              <h3 className=" pb-4 font-bold">ResumeBuilder</h3>
              <p>
                A react app where a user can build and save a master resume and then take experiences from it and add them to a "working resume" and customize it as they see fit. 
              </p>
              <h4 className=" py-4 text-teal-600 dark:text-emerald-500">Some technologies used:</h4>
              <p className="py-1 text-gray-700 dark:text-gray-400">React</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">Nodejs</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">React Router</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">Sessions</p>
            </div>
          </a>
          <a href="https://github.com/mikec7592/RamenHntr" target="_blank">
            <div className=" hover:animate-pulse text-center shadow-lg p-5 rounded-xl my-10 bg-slate-100 dark:bg-slate-800" >
              <Image className=" mx-auto py-4" src={p4_1} width={200} height={200} />
              <h3 className=" pb-4 font-bold">RamenHntr</h3>
              <p>
                A restaruant tracking app where a user can create an account, save and rate restaruants, as well as upload images via AWS 3. 
              </p>
              <h4 className=" py-4 text-teal-600 dark:text-emerald-500">Some technologies used:</h4>
              <p className="py-1 text-gray-700 dark:text-gray-400">Python</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">Django</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">AWS 3</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">Django Auth</p>
            </div>
          </a>
          <a href="https://github.com/mikec7592/anime_list" target="_blank">
            <div className=" hover:animate-pulse text-center shadow-lg p-5 rounded-xl my-10 bg-slate-100 dark:bg-slate-800" >
              <Image className=" mx-auto py-4" src={p2_0} width={200} height={200} />
              <h3 className=" pb-4 font-bold">Made_By_Mike</h3>
              <p>
                My porfolio page that you're currently browsing.  I wanted to update my portfolio so I used the opportunity to practice/learn some Taillwind. 
              </p>
              <h4 className=" py-4 text-teal-600 dark:text-emerald-500">Some technologies used:</h4>
              <p className="py-1 text-gray-700 dark:text-gray-400">React</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">Nodejs</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">Tailwind CSS</p>
              <p className="py-1 text-gray-700 dark:text-gray-400">Deployed via Vercel</p>
            </div>
          </a>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center">Images & More</h3>
            <p className=" text-md py-2 leading-8 text-gray-700 dark:text-black" >Below are some screenshots of a few apps I've done.  The images depict how the app looks when accessed via desktop but they have been optomized for use on a mobile phone or smaller device as well.</p>
            <p className=" text-md py-2 leading-8 text-center text-gray-700 dark:text-black" >Check out some of my projects below</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap bg-slate-100 dark:bg-slate-700 ">
            <div className="basis-1/3 flex-1">
              <Image src={p1_2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={p3_1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={p4_1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={p2_1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}