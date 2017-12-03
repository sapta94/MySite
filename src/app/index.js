import React from "react";
import ReactDOM,{render} from "react-dom";

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        )
    }
}
render(<App />,window.document.getElementById('root'));