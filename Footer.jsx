import React from "react";
var currentYear=new Date().getFullYear();
function Footer(){
    return <footer>
    {/* <div className="foot"> */}
       <p>CopyRight © ShomsInc. {currentYear}</p> 
       {/* </div> */}
    </footer>
}
export default Footer;