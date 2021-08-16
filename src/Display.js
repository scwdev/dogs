import React from "react";

const Display = (props) => {
  const { dogs } = props

  const loading = () => {
    return (
      <h1> Loading... </h1>
    )
  }

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {dogs.map(( dog ) => (
        <article>
          <img src={ dog.img } />
          <h1>{ dog.name }</h1>
          <h3>Age: { dog.age }</h3>
          <button onClick={() => {
            props.selectDog( dog )
            props.history.push( "/edit" )}}>
            Edit
          </button>
          <button style={{"background-color": "red"}}onClick={() => {
            props.deleteDog( dog )
            props.history.push( "/" )}}>
            Delete
          </button>
        </article>
      ))}
    </div>
  )

  return dogs.length > 0 ? loaded() : loading()
};

export default Display;
