const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
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
  return <div className="add-form">
    <h3>What do you for your Trip 😍</h3>
  </div>
};

function PackinList() {
  return 
    <ul className="list">
      {initialItems.map((item)=> (<Item item={item}/>))}
    </ul>
};

function Item({item}) {
  return <li>{item.description}</li>
}




function Stats() {
  return <footer className="stats">
    <em>
    🧳You have X items in your list 📃, and you already packed X (X%).
    </em>
  </footer>
};
