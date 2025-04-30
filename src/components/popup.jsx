import React from 'react';
import git from '../assets/github-logo-24.png'

const PopupWindow = ({title, info, onClick, image,isCSS,isHTML,isScript,isAnimate,link}) =>{

    return (

       <div className="flex justify-center items-center z-10 fixed top-0 left-0  w-screen h-screen  antialiased bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
             <button onClick = {onClick} className="absolute top-1 left-1 transition duration-300 ease-in-out  last:mr-0 py-2 px-4 bg-white border border-solid border-purple-700 rounded text-purple-700 font-normal focus:outline-none focus:shadow-outline hover:bg-purple-700 hover:text-white">
                X
            </button>
            <div className="w-4/5 h-auto rounded-lg shadow-lg p-2 flex flex-col items-center bg-white/50">
                <h1 className="mt-6 text-2xl">{title}</h1>
                <div className="relative">
                    <img className="w-sm md:w-md"src={image} />
                    <div className="absolute  hover:hue-rotate-30 right-0 bg-violet-700 p-2 rounded-full -mt-10">
                            <a href={link}  target="_blank"><img src={git}/></a>
                    </div>
                </div>
                <div className="tech flex justify-center flex-wrap">
                    {isCSS? <button className=" m-2 bg-fuchsia-200 text-fuchsia-800 font-montserrat py-2 px-8 font-medium rounded-xl shadow-lg shadow-indigo-500/50">
                        CSS</button> : ""}
                    {isHTML? <button className=" m-2 bg-indigo-50 text-indigo-800 font-montserrat py-2 px-8 font-medium rounded-xl shadow-lg shadow-indigo-500/50">
                        HTML</button> : ""}
                    {isScript? <button className=" m-2 bg-fuchsia-400 text-white font-montserrat py-2 px-8 font-medium rounded-xl shadow-lg shadow-indigo-500/50">
                        Javascript</button> : ""}
                    {isAnimate? <button className="m-2 bg-indigo-400 text-white font-montserrat py-2 px-8 font-medium rounded-xl shadow-lg shadow-indigo-500/50">
                        Animation</button> : ""}
                </div>
                <p className="w-full p-2 text-center">{info}</p>
            </div>
           




       </div>

    )//END OF RETURN

}

export default PopupWindow;