import React from 'react'

export default function MyTable(props) {
    if (props.list.length === 0)
        return (<div></div>)
    else
        return (
            <div>
                <table border="1" width="100%">
                <tr><th colspan="3">{props.tableName}</th></tr>
                <tr><th>Index</th><th>First Name</th><th>Last Name</th></tr>
                { /*for (var index = 0; index<list.length; index++) {
                    element = list[index];
                    }*/
                    props.list.map((element, index) => {
                        return <tr key={index+1}><td>{index+1}</td><td>{element.fname}</td><td>{element.lname}</td></tr>
                    })
                }
                </table>
            </div>
        )
}

