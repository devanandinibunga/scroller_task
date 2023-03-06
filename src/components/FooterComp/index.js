import './FooterComp.css';
import Counter from "../Counter/index";


const FooterComp =({counter,leftclick,rightclick,blogData})=>{
    
    return (
        
        <div className="bottom-container" >
            <Counter blogData={blogData} counter={counter}/>
            <div className='icon-container'>
                <button className="footer-button-left" onClick={leftclick}> </button>
                <button className="footer-button-right" onClick={rightclick}></button>  
            </div>  
        </div>
    );
}
export default FooterComp;