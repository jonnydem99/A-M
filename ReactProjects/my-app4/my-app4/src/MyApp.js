import React, { Component } from 'react'

export default class MyApp extends Component {
    constructor(props) {
        super(props);
        console.log("MyApp constructor called")
        
        this.state = {
            cnt : 5         // const [cnt, setCnt] = useState(5);
        };
        this.handleClick = () => {
            this.setState( { cnt: this.state.cnt + 1})
            console.log("handleClick called cnt=" + this.state.cnt)
        }
        /*
        function handleClick() {
             setCnt( cnt + 1);
        }
        */
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <button onClick={this.handleClick}>Click Me</button>
            </div >
        )
    }
}
