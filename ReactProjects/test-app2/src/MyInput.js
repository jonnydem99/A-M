import React from 'react'

export default function PostButton(props) {
    var style = {
        width:24,
        height:24
    }
    return (
        <button style = {style}>{props.label}</button>
    )
}