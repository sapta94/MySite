import React from "react";
import ReactDOM,{render} from "react-dom";
import Navigation from "./components/Navbar"
import Timeline from "./components/Timeline"
import About from "./components/About"
import Expertise from "./components/Expertise"
import "../css/main.css"
import 'react-vertical-timeline-component/style.min.css';
import { log } from "util";
class App extends React.Component{
   
    render(){
        return (
            <div>
                <Navigation/>
                <About/>
                <Timeline />
                <Expertise/>
            </div>
        )
    }
}
render(<App />,window.document.getElementById('root'));