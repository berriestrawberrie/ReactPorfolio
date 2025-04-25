import Project from './components/project.jsx'
import Whale from './components/whale.jsx'
import typeGame from './assets/typeGame.png'
import responsive from './assets/responsive.png'
import animation from './assets/animation.png'

import './App.css'

function App() {
  return(
    <>
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
        <Whale />
    </>

  )//END OF RETURN
}

export default App
