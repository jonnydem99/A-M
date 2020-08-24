import React, { Component } from 'react'

export default class MyTableC extends Component {
    render() {
        return (
            <div>
                <table border="1" width="80%">
                    <thead>
                    <tr><th colSpan="3">{this.props.tableName}</th></tr>
                    <tr><th>Index</th><th>First Name</th><th>Last Name</th></tr>
                    </thead>
                    <tbody>
                    {
                        this.props.list.map((element, index) => {
                            return <tr key={index + 1}><td>{index + 1}</td><td>{element.fname}</td><td>{element.lname}</td></tr>
                        })
                        // for (var index=0; index < state.list.length; index++) {
                        //    var element = state.list[index]   
                        // }
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

