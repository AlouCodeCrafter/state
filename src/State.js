import React from "react";

class State extends React.Component{

        constructor(props){
            super(props)
            this.state = { title : ' louthieu '}
        }

    render (){
        return (
            <h1>{this.state.title} </h1>

        )
    }
}

export default State;