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
        <div className="flex flex-col align-middle w-sm mt-4 md:w-md rounded-lg shadow-lg">
            <h2 className="font-bold text-center text-x1 mb-2 leading-normal">{props.title} <button className="button berry" onClick={()=>setisOpen(true)}>🔍</button></h2>
            <img className="w-full"src={props.image} />
           <div className="flex justify-center">
                {props.isHTML? <button className=" m-2 bg-indigo-50 text-indigo-800 font-montserrat py-2 px-2 md:px-8 font-medium rounded-xl shadow-lg shadow-indigo-500/50">
                        HTML</button> : ""}
                {props.isCSS? <button className=" m-2 bg-fuchsia-200 text-fuchsia-800 font-montserrat py-2 px-2 md:px-8 font-medium rounded-xl shadow-lg shadow-indigo-500/50">
                    CSS</button> : ""}    
                {props.isScript? <button className=" m-2 bg-fuchsia-400 text-white font-montserrat py-2 px-2 md:px-8 font-medium rounded-xl shadow-lg shadow-indigo-500/50">
                    Javascript</button> : ""}  
                {props.isAnimate? <button className="m-2 bg-indigo-400 text-white font-montserrat py-2 px-2 md:px-8 font-medium rounded-xl shadow-lg shadow-indigo-500/50">
                    Animation</button> : ""}  
           </div>
        </div>
        </>
    )

}

export default Project;