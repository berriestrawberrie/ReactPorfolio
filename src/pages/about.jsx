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
    <div>
    <h1>About</h1>
    <p>This is the about page. Click the botton to preview projects</p>
    </div>
    {isOpen ?
    //IS OPEN TRUE
    <div className="about">
        <button className="button button-nav" onClick={toggle}>X</button>
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
    <button className="button button-nav" id="preview" onClick={toggle}>Preview</button>
    }
    
        
    </>)
}



export default About;