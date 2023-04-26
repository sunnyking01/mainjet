import React from "react";
import Button from "./Button";

class Developments extends React.Component {
    render() {
        return(
            <div className="devleft">
                <div className="devsort">
                    <p>Developments</p>
                    <Button btnText= 'Sort by' /> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ddd" d="M8.854 9.854L12 6.707l3.146 3.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707l-3.5-3.5a.5.5 0 0 0-.706 0l-3.5 3.5a.5.5 0 0 0 .707.707zm6.292 4.292L12 17.293l-3.147-3.146a.5.5 0 0 0-.707.707l3.5 3.5a.498.498 0 0 0 .707 0l3.5-3.5a.5.5 0 0 0-.707-.708z"/></svg>
                    
                </div>
            </div>
        )
    }
    
}


export default Developments;