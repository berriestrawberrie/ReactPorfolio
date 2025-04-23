import typeGame from '../assets/typeGame.png'

function Project1(){
    return(
        <>
        <div className="card">
            <h2>Project Name:Javascript Typing Game</h2>
            <img className="screenshot" src={typeGame} alt="screenshot of project"/>
            <a href="https://github.com/berriestrawberrie/Typing-gameJS">Github</a>
            <div className="tech">
                <span className="css">CSS</span>  <span className="html">HTML5</span>  <span className="javascript">Javascript</span>
            </div>
            <p>This JavaScript word typing game challenges players to type displayed words correctly and quickly before time runs out. The game uses arrays, timers, and event listeners to track user input and score. Players gain points for each correct word. The assignment helps students practice DOM manipulation, real-time input handling, and basic game logic in JavaScript.</p>
        </div>
        </>
    )

}

export default Project1;