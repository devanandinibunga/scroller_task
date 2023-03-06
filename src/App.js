import React from 'react';
import './App.css';
import Scroller from "./components/Scroller/index";
import sliderContext  from "./components/sliderContext";



const App = () => {


  const blogData = [ 
    {
      id:1,
      bgimage: 'https://static1.squarespace.com/static/images/5dce9a7a4a2f6b4b1c4b3e27?format=1500w',
      description:'HESTER'
    },
    {
      id:2,
      bgimage: 'https://static1.squarespace.com/static/images/5dce9bca4a2f6b4b1c4b4c5a?format=1500w',
     description:'CROSBY'
    },
    {
      id:3,
      bgimage: 'https://images.squarespace-cdn.com/content/5d02d798cc25920001b61816/9301cd95-5003-4432-b7a7-970d96ec9eac/image-asset.png?content-type=image%2Fpng?format=1500w',
      description:'ALAMEDA'
     },
    {  
      id:4,
      bgimage: 'https://static1.squarespace.com/static/images/5dd2dd7408c34d165a79146f?format=1500w',
     description:'TRESOIRE'
    },
    { 
      id:5,
      bgimage: 'https://static1.squarespace.com/static/images/5dce9f7f2288341b18da0d47?format=1500w',
        description:'VENTURA'
    },
    {
      id:6,
      bgimage: 'https://static1.squarespace.com/static/images/5dd2c7788d395f1e947c02f8?format=1500w',
      description:'MARU'
      },
   ];
   
  return (
    <div id='blogPage'>
      <sliderContext.Provider value={blogData}>
        <sliderContext.Consumer>
          {(blogData)=>(
            <Scroller blogData={blogData} />
          )}
        </sliderContext.Consumer>
      </sliderContext.Provider>
    </div>
  );
}
export default App;
