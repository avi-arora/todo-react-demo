import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Login(props){
    
    //state variables 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
        <div className="col-sm-12">
                <h1 class="text-center">Login</h1>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input onChange={(e) => setPassword(e.target.value)} valid={password} type="password" name="password" id="password" placeholder="password" />
                    </FormGroup>
                    <Button>Login</Button>
                </Form>
            </div></>
    )
}