import MyList from "./MyList.js";
import { useState } from "react";
import AddItem from "./AddItem";

const MyContainer = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "First item",
    },
    {
      id: 2,
      text: "Second item",
    },
    {
      id: 3,
      text: "Third item",
    },
  ]);

  return (
    <div>
      <MyList header="List Header" items={items} />
{/*       <div>
        <from onSubmit={AddItem.onSubmit}>
          <label for="text">Item</label>
          <textarea
            class="materialize-textarea"
            id="text"
            name="text"
            placeholder="Add item"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button class="waves-effect waves-light btn" type="submit">
            Add
          </button>
        </from>
      </div> */}
    </div>
  );
};

export default MyContainer;
