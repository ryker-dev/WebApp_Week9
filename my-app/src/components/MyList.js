import React from 'react'

const MyList = (props) => {
  return (
    <div>
        <h1>{props.header}</h1>
        <ol>
        {props.items.map((item) => (
            <li>
              <p>{item.text}</p>
            </li>
        ))}
        </ol>
    </div>
  )
}

export default MyList;
