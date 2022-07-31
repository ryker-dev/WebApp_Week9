import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'

const MyList = (props) => {
  return (
    <div>
        <h1>{props.header}</h1>
        <ol>
        {props.items.map((item) => (
            <li key={item.id}>
              {item.text}
            </li>
        ))}
        </ol>
    </div>
  )
}

export default MyList;
