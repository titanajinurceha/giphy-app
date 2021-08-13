import React from "react";

export default function index(props){
    return(
        <>
            <h5>{props.tittle}</h5>
            <img alt={props.tittle} src={props.url} />
        </>
    )
}