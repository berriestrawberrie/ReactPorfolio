import Avatar from '../assets/avatar.png';
import Berrie from '../assets/purp-berrie.png'


function Personal(){

    return(
        <div className="flex flex-col  items-center md:flex md:flex-row md:justify-center ">
            <img className="rounded-full w-xs md:w-sm"src={Avatar} />
            <div className="title-section md:w-1/3  m-2 p-4">
                <div className="px-4 mb-4 bg-white rounded-lg inline-block relative ">
                    <h1 className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-2 rounded-lg text-2xl inline-block text-transparent bg-clip-text">Brooke R. Brown</h1><img className="absolute -top-2 -right-2 rotate-20" src={Berrie} width="40"/>
                </div>
                <p className="shadow-lg mx-auto#card-1 px-4 rounded-lg">
                Welcome, my name is Brooke Brown I'm 33 years old. I am a developing developer! I moved from the United States of America to Sweden with my dog and cat to start a new life with my husband.  Being in a new country has presented me with many challenges, but it has also provided me with an opportunity to improve my own skills in a field I've had interest in for years.</p>
            </div>
        </div>
    )
}


export default Personal;