import { useState } from "react";
import './Scroller.css';
import Slider from '../Slider/index';
import FooterComp from '../FooterComp/index';
// import ErrorBoundary from '../ErrorBoundary/index';
// import sliderContext  from "../sliderContext";




const Scroller = ({blogData}) =>{
   const slidesContainer = document.getElementById('top_container');
   console.log(slidesContainer);
  let [counter,setCounter]=useState(1);
  const length = blogData.length;
    function leftclick() {
      if (counter >= 1 && counter <= blogData.length){
        // slidesContainer.scrollLeft += document.getElementById("scroll").scrollWidth;
        // setCounter(counter+1);
          setCounter(counter === 1 ? length : counter-1)
          blogData.unshift(blogData.pop());
            
        //   if ((counter===1)|| (counter<=6 && counter >=1)){
        //     // slidesContainer.scrollLeft += document.getElementById("scroll").scrollWidth; 
           
        //     // setCounter(counter === length ? 1 : counter+1)
        //     // setCounter(counter+1); 
                                   
        // }   
        
      }
      // setCounter(counter === 1 ? length : counter-1);
      //   if (counter >1 && counter< blogData.length){
      //       // setCounter(counter-1)
      //       slidesContainer.scrollLeft -= document.getElementById("scroll").scrollWidth;     
      //   }
       
    }

    function rightclick(){  
        if (counter >= 1 && counter <= blogData.length){
          // slidesContainer.scrollLeft += document.getElementById("scroll").scrollWidth;
          
          // setCounter(counter+1);
          setCounter(counter === length ? 1 : counter+1)
          blogData.push(blogData.shift());
              
          //   if ((counter===6)|| (counter>=1 && counter <6)){
          //     // slidesContainer.scrollLeft += document.getElementById("scroll").scrollWidth; 
              
          //     // setCounter(counter === length ? 1 : counter+1)
          //     // setCounter(counter+1); 
                                     
          // }   
          
        }
            

        
    }
  
  return (
    <div className='main-container'>
      <ul id='top_container'>
        
          {blogData.map((post)=>(
            
              <Slider post={post} counter={counter} />
              
           ))}
       
          
      </ul>
      {/* <ErrorBoundary> */}
        <FooterComp blogData={blogData} leftclick={leftclick} rightclick={rightclick} counter={counter} />
      {/* </ErrorBoundary> */}
    </div>
 );
};
export default Scroller;