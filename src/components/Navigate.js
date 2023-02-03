
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from './Home';

function Navigate() {

  const navigate = useNavigate();
  const [age, setAge] = useState(1)
  
  const navigator = () => {
    navigate('/contact')
  }
  return (
    <div>
      {age}
      <Home age={age} abc='abc' setAge={setAge} navigate={navigate} />
    </div>
  )
}

export default Navigate

// import React, { Component } from 'react'
// import Home from './Home'

// export default class Navigate extends Component {
//   constructor() {
//     super()
//     this.state = {
//       age:20
//     }
//   }

//   updateAge = () => {
  
//     this.setState({age: this.state.age + 1})
//   }

//   render() {
//     return (
//       <div>
//         {this.state.age}
//         <Home abc='abc' state={this.state} updateAge = {this.updateAge} />
//       </div>
//     )
//   }
// }

/* 

const mapStateToProps => (store) {

  return {
      age: store.age;
  }
}

this.props.age
this.props.action();
*/

// export default connect(mapStateToProps,{action,}).(Navigate)