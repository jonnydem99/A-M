import React, { Component, createRef } from 'react'
import MyTableC from './MyTableC'
import { createStore } from 'redux'

//action creator
const addItem = item => {
    return {
      type: "ADD_ITEM",
      item: item
    };
  };

//reducer
const reducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return [...state, action.item];
      default:
        return state;
    }
  };

  var store = createStore(reducer);

console.log(store.dispatch(addItem("a")));
console.log(store.getState());
console.log(store.dispatch(addItem("b")));
console.log(store.getState());
console.log(store.dispatch(addItem("c")));
console.log(store.getState());

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}


export default class MyApp extends Component {
    componentDidMount() {
        console.log("componentDidMount called")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount called")
    }    
    componentDidUpdate() {
        console.log("componentDidUpdate: cnt=" + this.state.cnt);
        console.log("componentDidUpdate: " + JSON.stringify(this.state.list))
    }   
  
    constructor(props) {
        super(props);
        console.log("MyApp constructor called")
        
        this.state = {
            cnt : 5,       // const [cnt, setCnt] = useState(5);
            list: []       // const [list, setList] = useState([]); list = []
        };
    this.handleClick = () => {
        this.setState( { cnt: this.state.cnt + 1});
        this.setState( { list: [...this.state.list, { fname: this.fnameRef.current.value, lname: this.lnameRef.current.value} ]});
        console.log( this.fnameRef.current.value + ", "
            + this.lnameRef.current.value)
            /*
            setList( [...list, {
                fname: fnameRef.current.value, 
                lname: lnameRef.current.value}
            ])
            */
    }


        this.fnameRef = createRef();
        this.lnameRef = createRef();
    }

    render() {
        console.log("render called")
        return (
            <div>
                <input type="text" ref={this.fnameRef} placeholder="First Name" />
                <input type="text" ref={this.lnameRef} placeholder="Last Name" />
                <button onClick={this.handleClick}>Click Me</button>
                <MyTableC tableName="Employees" list={this.state.list}></MyTableC>
            </div >
        )
    }
}

