import React from 'react';

const PopupWindow = ({title, info, onClick, image}) =>{

    return (

        <div className="popup-window">
            <h1 className="pop-title">{title}</h1>
            <img className="pop-image" src={image} />
            <p className="pop-info">{info}</p>

            <button onClick = {onClick} className="button button-nav btn-center">
                Close Window
            </button>


        </div>


    )//END OF RETURN

}

export default PopupWindow;