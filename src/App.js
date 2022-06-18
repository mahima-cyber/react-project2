import { Link } from "react-router-dom";

import './App.css';


function App() {
  const posts = [{"id": 1, "name": "test1"}, {"id": 2, "name": "test2"}]
  const name= "testApp"
  return (
    <div className="App">
       <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
            
          </li>

          <li>
            <Link to="/api">Api</Link>
            
          </li>
          
        </ul>
      </nav>

      <posts posts={posts} name={name}/>
      
      
    </div>
  );
}

export default App;

