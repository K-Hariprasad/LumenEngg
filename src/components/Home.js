import React from "react"
import Carousel from './Carousel';
import About from "./AboutUs";
import Contact from "./ContactUs";

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Carousel/>
            <About/>
            <Contact/>

            </React.Fragment>
            
        )
    }
}
export default Home
