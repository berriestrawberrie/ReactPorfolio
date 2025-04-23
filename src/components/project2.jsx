import responsive from '../assets/responsive.png'

function Project2(){
    return(
        <>
             <div className="card">
                      <h2>Project Name:Responsive Web Design</h2>
                      <img className="screenshot" src={responsive} alt="screenshot of project"/>
                      <a href="https://github.com/berriestrawberrie/Exam1">Github</a>
                      <div className="tech">
                          <span className="css">CSS</span>  <span className="html">HTML5</span> 
                      </div>
                      <p>This assignment focuses on building a responsive website that adapts seamlessly to different screen sizes and devices. Students will use HTML and CSS, including media queries and flexible layouts, to ensure the site remains user-friendly on desktops, tablets, and smartphones. </p>
            </div>
        </>
    )

}

export default Project2;