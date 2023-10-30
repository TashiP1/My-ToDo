import { useState } from "react";

export function NewTodoForm({onSubmit}){
    const [newItem, SetNewItem] = useState("");

    function handelSubmit(e) {
        e.preventDefault();
        if (newItem === "") return
        onSubmit(newItem)
        SetNewItem("")
      }

    return (
        <form onSubmit={handelSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => SetNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">ADD</button>
      </form>
    )
}