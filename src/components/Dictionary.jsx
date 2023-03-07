import React from "react";

var dict = this.props.dict;
var arr = [];

const Dictionary = (props) => {
    for (var key in dict) {
        console.log(dict[key])
    }
}

export default Dictionary; 
