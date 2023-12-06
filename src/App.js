
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
  return <div className="list">LIST</div>
};
function Stats() {
  return <footer className="stats">
    <em>
    🧳You have X items in your list 📃, and you already packed X (X%).
    </em>
  </footer>
};
