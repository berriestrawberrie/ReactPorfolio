import git from '../assets/github-logo-24.png'

function Project(props){
    return(
        <>
        <div className="card">
            <h2>{props.title}</h2>
            <div className="preview">
                <img className="screenshot" src={props.image} alt="screenshot of project"/>
                <a href={props.link}><button className="button"><img src={git}/>GITHUB</button></a>
            </div>
            <div className="tech">
                {props.isCSS? <span className="css">CSS</span> : ""}
                {props.isHTML? <span className="html">HTML5</span> : ""}
                {props.isScript? <span className="javascript">Javascript</span> : ""}
                {props.isAnimate? <span className="animation">Animation</span> : ""}
            </div>
            <p>{props.content}</p>
        </div>
        </>
    )

}

export default Project;