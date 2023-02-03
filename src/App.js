import { Component } from "react"
import { Route, BrowserRouter as Router , Routes , Link} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import { HomeRFC } from "./components/Home"
// import Home from "./components/Home"
import Navigate from "./components/Navigate"

export default class App extends Component{
  // constructor() {
  //   super()
  //   this.state={count:0}
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState!==this.state.count)
  //   console.log(this.state)
  // }

  render(){
    return (
      <div>
        <Router>
          <h1>App</h1>
          {/* <button onClick={this.setState((prev) => ({ count: prev.count - 1 }))}>decrement</button>
          <h6>Count: {this.state.count}</h6>
          <button onClick={this.setState((prev)=>({count:prev.cou+1}))}>increament</button> */}
          <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<HomeRFC />} />
            <Route path="/home" element={<HomeRFC /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/contact" element={<Contact /> } />
          </Routes>
        </Router>
      </div>
    )
  }
}


