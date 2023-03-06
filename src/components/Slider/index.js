import "./Slider.css";
import sliderContext  from "../sliderContext";

const Slider=()=>{
    return (
        <sliderContext.Consumer>
        {(bgimage,description)=>(
        <li id='scroll'>
                <div className ='bg-container' style={{backgroundImage: `url(${bgimage})`}}></div>
                <p className='description'>{description}</p>   
        </li>     
        )}
        </sliderContext.Consumer>      
    )
}
export default Slider;