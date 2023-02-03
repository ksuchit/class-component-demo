import { Component, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default class Home extends Component{
    
    constructor() {
        super();
        this.state = {
            fName: '',
            lName: '',
            address: '',
            email: '',
            password: '',
            checkBox:false
        }
        
        console.log("construstor")
    }
    handleInputField = (e) => {
        console.log(typeof e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }
    handleCheckField = (e) => {
        this.setState({checkBox:e.target.value==='false'})
    }
    handleSubmit() {
        // console.log(this.state.fName)
        console.log("submit")
        this.props?.navigate('/contact')
    }
    componentDidUpdate() {
        console.log(this.state)
        // this.props.setState({age:this.props.age+1})
        console.log("component did update")
    }
    componentDidMount() {
        console.log("component did mount")
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>{this.props.abc}</h1>
                <h1>{this.props.age}</h1>
                <button className='btn btn-primary' onClick={() => this.props.setAge((prev) => prev + 1)}>Click</button>
                <button className="btn btn-secondary mx-3" onClick={()=>this.props.navigate('/contact')}>go to contact page</button>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First name" name="fName" value={this.state.fName}
                        onChange={(e)=>this.handleInputField(e)}
                    />
                </Form.Group>
                {this.state.fName==='' && <p style={{color:'red'}}>Its Required</p> }        
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" name="lName" value={this.state.lName}
                        onChange={(e)=>this.handleInputField(e)}
                    />
                </Form.Group>
                {this.state.lName==='' && <p style={{color:'red'}}>Its Required</p> }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" name="address" value={this.state.address}
                        onChange={(e)=>this.handleInputField(e)}
                    />
                </Form.Group>
                {this.state.address==='' && <p style={{color:'red'}}>Its Required</p> }    
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email}
                        onChange={(e)=>this.handleInputField(e)}
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={this.state.password}
                        onChange={(e)=>this.handleInputField(e)}    
                    />
                    </Form.Group>
                    
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" name='checkBox' value={this.state.checkBox}
                        onChange={(e)=>this.handleCheckField(e)}
                    />
                </Form.Group>
                <Button variant="primary"  onClick={this.handleSubmit}>
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}

export function HomeRFC() {
    
    const navigate = useNavigate();
    const [age, setAge] = useState(1);
    return (
        <div>
            {age}
            <Home age={age} setAge={setAge} navigate={navigate} abc="abc"/>  
        </div>
    )
}