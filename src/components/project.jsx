import git from '../assets/github-logo-24.png'
import {useState} from 'react';
import Popup from '../components/popup.jsx';

function Project(props){

    const [isOpen, setisOpen] = useState(false);

    const closePopup = ()=> {
        setisOpen(false);
    }

    return(
        <>
        
        {isOpen && <Popup title={props.title} info={props.content} 
        onClick={closePopup} image={props.image} 
        isCSS={props.isCSS} isHTML={props.isHTML} isScript={props.isScript}
        isAnimate={props.isAnimate} link={props.link}
        />}
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
            <button className="button berry" onClick={()=>setisOpen(true)}>🔍</button>
            
       
        </div>
        </>
    )

}

export default Project;