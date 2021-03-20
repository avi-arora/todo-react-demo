import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AuthService from '../services/AuthService';

export default function Register(props) {

    //state variable for controlled from 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const hist = useHistory();
    const registerUser = () => {
        AuthService.register({name:name, email: email, password: password, age: age}).then((resp)=>{
            console.log("hello");
            console.log(resp);
            hist.push("/login");
        })
    }


    return (
        <>
            <div className="col-sm-12">
                <h1 className="text-center">Register</h1>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" id="name" placeholder="Full Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Age">Age</Label>
                        <Input onChange={(e) => setAge(e.target.value)} value={age} type="text" name="age" id="age" placeholder="Age" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" />
                    </FormGroup>

                    <Button type="button" onClick={registerUser}>Register</Button>
                </Form>
            </div>

        </>
    )
}