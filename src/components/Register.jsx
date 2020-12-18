import React from 'react'
import { Container, Form, Button,Col,Alert} from 'react-bootstrap'




class Register extends React.Component {

    state={
        register:{
        name:'',
        surname:'',
        email:'',
        adress1:'',
        adress2:'',
        zip:'',
        date:''
    },

    errMessage:''
    }

    submitForm=(e)=> {
        e.preventDefault()

        let nameLength= this.state.register.name.split("")
        
        if(nameLength.length < 2 ){ this.setState({errMessage:'You should add name grater than 2 chars'})}

       
    }

    

    updateField=(e)=>{
        let register= {...this.state.register}
        let currentid=e.currentTarget.id
        register[currentid]=e.currentTarget.value
        console.log(e.currentTarget.id)


        this.setState({ register:register  })

    }



    render() {
        return (
            <Container >
                
             <Form className="px-5 mt-5" onSubmit={this.submitForm}>
             <Form.Row>
                <Form.Group  as={Col}  >
                    <Form.Label>Name</Form.Label>
                    {this.state.errMessage && <Alert variant="danger" >Please add name more than 2 chars</Alert>}
                    <Form.Control id="name" type="text"  value={this.state.register.name} onChange={this.updateField} placeholder="Enter Name"  required/>
                    
                </Form.Group>
                <Form.Group  as={Col} >
                    <Form.Label>Surname</Form.Label>
                    <Form.Control  id="surname" type="text"  value={this.state.register.surname} onChange={this.updateField} placeholder="Enter surname" reqired/>                   
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} >
                <Form.Label>Email</Form.Label>
                <Form.Control id="email" type="email"  value={this.state.register.email}  onChange={this.updateField} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label>Password</Form.Label>
                <Form.Control id="password" type="password"  value={this.state.register.password} onChange={this.updateField} placeholder="Password" />
                </Form.Group>
            </Form.Row>

            <Form.Group >
                <Form.Label>Address</Form.Label>
                <Form.Control  id="adress1"value={this.state.register.adress1} onChange={this.updateField} placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group >
                <Form.Label >Address 2</Form.Label>
                <Form.Control  id="adress2" value={this.state.register.adress2} onChange={this.updateField} placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} >
                <Form.Label htmlFor="city" >City</Form.Label>
                <Form.Control  id="city" type="text"  value={this.state.register.city} onChange={this.updateField} />
                </Form.Group>
                

                <Form.Group as={Col} >
                <Form.Label>Zip</Form.Label>
                <Form.Control  id="zip" />
                </Form.Group>
                <Form.Group>
                                <Form.Label htmlFor="date">Date of Birth</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    id="date"
                                    placeholder="Date of your birth"
                                    value={this.state.register.date}
                                    onChange={this.updateField}
                                    
                                />
                            </Form.Group>
              
            </Form.Row>
            

            

            <Button variant="danger" type="submit" >
                Submit
            </Button>
</Form>
              
                
            </Container>

        
            
           
        )
    }
}

export default Register