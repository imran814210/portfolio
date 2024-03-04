import React, { Component } from "react";
import pimg from '../Asset/mypic.jpg';

class Home extends Component{
    render(){
        return(
            <>
                <div className="flex justify-center bg-slate-600  w-[500px] h-[500px] mt-2">
                    <img src={pimg}  alt="My Photo" className="rounded-lg w-[400px] h-[400px] border-4 border-white "/>
                </div>
            </>
        );
    }
}
export default Home;