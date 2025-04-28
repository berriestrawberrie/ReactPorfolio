import React from 'react';
import git from '../assets/github-logo-24.png'

const PopupWindow = ({title, info, onClick, image,isCSS,isHTML,isScript,isAnimate,link}) =>{

    return (

        <div className="popup-window">
            <h1 className="pop-title">{title}</h1>
            <div className="preview">
                <img className="pop-image" src={image} />
                <a href={link}><button className="button"><img src={git}/>GITHUB</button></a>
            </div>
            <div className="tech">
                {isCSS? <span className="css">CSS</span> : ""}
                {isHTML? <span className="html">HTML5</span> : ""}
                {isScript? <span className="javascript">Javascript</span> : ""}
                {isAnimate? <span className="animation">Animation</span> : ""}
            </div>
            <p className="pop-info">{info}</p>
            <button onClick = {onClick} className="button button-nav btn-center">
                Close Window
            </button>


        </div>


    )//END OF RETURN

}

export default PopupWindow;