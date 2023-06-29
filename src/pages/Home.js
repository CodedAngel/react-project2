import { Link } from "react-router-dom"


export default function Home(){
    return<>

<h1 className="text-center text-white m-5">REACT PROJECT</h1>
    <div className="projects d-flex flex-column align-items-center">
      <Link to="/todo-app" className="project">Todo App</Link>
      <Link to="/expense-tracker" className="project"> Expense Tracker</Link>
      <Link to="/fake-store" className="project"> Fake Store</Link>
      <Link to="/movie-tracker" className="project"> Movie Website</Link>
    
    </div>

    </>
}