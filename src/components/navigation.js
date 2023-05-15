import React from 'react'
import {Link,useLocation} from "react-router-dom"

const Navigation = () => {
    const path=useLocation().pathname;
    console.log(path)
    
  return (
    <div>
      <nav>
        <ul>
            <li><Link to="/" style={{color:path==="/"&&"blue"}}>
                Home
                </Link>
            </li>
            <li><Link to="/About" style={{color:path==="/About" && "blue"}}>About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
