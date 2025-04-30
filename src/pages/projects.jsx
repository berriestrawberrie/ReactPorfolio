import Project from '../components/project.jsx'
import typeGame from '../assets/typeGame.png'
import responsive from '../assets/responsive.png'
import animation from '../assets/animation.png'
import { useState } from 'react'

function About(){

    const [isOpen, setisOpen] = useState(false);

    function toggle(){
        
        if(isOpen){
            setisOpen(false)
        }else{
            setisOpen(true)
        }

    }

    return (
    <>
      <div className="container mt-8 mx-auto text-center mb-8 mt-8">
        <div className="px-2 mb-4 bg-white rounded-lg inline-block ">
            <h1 className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-2 rounded-lg text-2xl inline-block text-transparent bg-clip-text">Studying IT programming at Sundsgården Folkhögskola</h1>
        </div>
        <p>
        The course provides basic skills and knowledge in web development. We work partially in teams of 2-4 participants in each team and partially individually. The followinga are projects completed in this course: </p>
        </div>

    {isOpen ?
    //IS OPEN TRUE
    <div className="container justify-center mx-auto flex flex-wrap md:space-x-8 relative">
        <button className="absolute -top-5 left-5 transition duration-300 ease-in-out  last:mr-0 py-2 px-4 bg-white border border-solid border-purple-700 rounded text-purple-700 font-normal focus:outline-none focus:shadow-outline hover:bg-purple-700 hover:text-white" onClick={toggle}>X</button>
        <Project 
            title="Typing Game" 
            image={typeGame}
            link="https://github.com/berriestrawberrie/Typing-gameJS"
            isCSS={true}
            isHTML={true}
            isScript={true}
            isAnimate={false}
            content="This JavaScript word typing game challenges players to type displayed words correctly and quickly before time runs out. 
            The game uses arrays, timers, and event listeners to track user input and score. Players gain points for each correct word. 
            The assignment helps students practice DOM manipulation, real-time input handling, and basic game logic in JavaScript"
            />
        <Project 
            title="Responsive CSS" 
            image={responsive}
            link="https://github.com/berriestrawberrie/Exam1"
            isCSS={true}
            isHTML={true}
            isScript={false}
            isAnimate={true}
            content="This assignment focuses on building a responsive website that adapts seamlessly to different
            screen sizes and devices. 
            Students will use HTML and CSS, including media queries and flexible layouts,
            to ensure the site remains user-friendly on desktops, tablets, and smartphones.
    "
            />
        <Project 
            title="CSS Animation" 
            image={animation}
            link="https://github.com/berriestrawberrie/CSSAnimation"
            isCSS={true}
            isHTML={true}
            isScript={false}
            isAnimate={true}
            content="This assignment teaches students how to create engaging visual effects using CSS animations 
            and transitions. Learners will animate elements such as buttons, images, or text to enhance user 
            interaction and improve UI dynamics. The project explores keyframes, timing functions, and transform 
            properties to bring web pages to life."
            />
           
        </div>
    
     :
    //IS OPEN FALSE
    <div className="container mx-auto md:flex justify-center md:space-x-8 relative ">
    <button className=" transition duration-300 ease-in-out  last:mr-0 py-2 px-4 bg-white border border-solid border-purple-700 rounded text-purple-700 font-normal focus:outline-none focus:shadow-outline hover:bg-purple-700 hover:text-white" id="preview" onClick={toggle}>View All</button>
    </div>
    }
    
    
        
    </>)
}



export default About;