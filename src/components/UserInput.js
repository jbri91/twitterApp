import React from "react";

function UserInput(props) {
  return (
    <input
      onChange={props.handleChange}
      style={{
        display: "flex",
        marginTop: "-23px",
        justifyContent: "center",
        paddingTop: "10px",
        paddingLeft: "25px",
        paddingRight: "25px",
      }}
      type="text"
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}

export default UserInput;
