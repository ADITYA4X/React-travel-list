const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 1, packed: false },
];


export default function App() {
  return <div className="app">
    <Logo/>
    <Form/>
    <PackinList/>
    <Stats/>
    </div>
}

function Logo() {
  return <div >
         <h1>🏖️ Far Away 🧳</h1>
         </div>
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you for your Trip 😍</h3>
      <select>
        {Array.from({ length: 20 }, (_, i)=> i + 1 ).map
        (num => 
          <option value={num} key={num}>
            {num}
          </option>)}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
    );
}

function PackinList() {
  return <div className="list">
      <ul >
        {initialItems.map(item=> <Item item={item} key={item.id}/>)}
      </ul>
    </div>
};

function Item({item}) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button> ❌ </button>
    </li>
    );
}


function Stats() {
  return <footer className="stats">
    <em>
    🧳You have X items in your list 📃, and you already packed X (X%).
    </em>
  </footer>
};
