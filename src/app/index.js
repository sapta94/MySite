import React from "react";
import ReactDOM,{render} from "react-dom";
import Navigation from "./components/Navbar"
import "../css/main.css"
class App extends React.Component{
    render(){
        return (
            <div>
                <Navigation />
            </div>
        )
    }
}
render(<App />,window.document.getElementById('root'));