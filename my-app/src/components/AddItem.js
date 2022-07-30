import { useState } from "react";

const AddItem = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()

}


/*   return (
    <div>
        <from onSubmit={onSubmit}>
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
    </div>
  ); */
};

export default AddItem;
