import animation from '../assets/animation.png'

function Project3(){
    return(
        <>
             <div className="card">
                      <h2>Project Name:CSS Animation</h2>
                      <img className="screenshot" src={animation} alt="screenshot of project"/>
                      <a href="https://github.com/berriestrawberrie/CSSAnimation">Github</a>
                      <div className="tech">
                          <span className="css">CSS</span>  <span className="html">HTML5</span>  <span className="animation">Animation</span>
                      </div>
                      <p>This assignment teaches students how to create engaging visual effects using CSS animations and transitions. Learners will animate elements such as buttons, images, or text to enhance user interaction and improve UI dynamics. The project explores keyframes, timing functions, and transform properties to bring web pages to life. </p>
            </div>
        </>
    )

}

export default Project3;