import {useState} from 'react'


const defaultItems = [
  {
    name: "Item 1"
  },
  {
    name: "Item 2"
  },
  {
    name: "Item 3"
  }
]

function ToDo() {
  const [text, setText] = useState("")
  const [items, setItems] = useState(defaultItems)

  const addItem = () => {
    setItems((prev) => [...prev, {name : text}])
    setText("")
  }

  return (
    <div>
      <input placeholder="ToDo" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <br/><br/>
      {
        items.map((item, key) => (
          <div key={key}>{item.name}</div>
        ))
      }
    </div>
  )
}

export default ToDo
