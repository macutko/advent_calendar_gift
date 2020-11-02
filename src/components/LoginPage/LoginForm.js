import React from "react"
import {Button, Form, FormGroup, Input} from "reactstrap";
import './style/style.css'
import crypto from 'crypto'
import AuthContext from "../AuthContext";


export default class LoginForm extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            password: ''
        }
    }

    verifyIdentity = () => {
        let hash = crypto.createHash('sha512')
        hash.update(this.state.password)
        let pass = hash.digest('hex')
        if (pass === '5e53c27a4c6164925a355cd37c1f9822c50dbe5b61d975504b58628c1816f92ae213e9ccacc59bd67e5a57941115a627ba04127eb076fd1a098376cc72c02f75') {
            this.context.logIn()
        }
    }

    render() {
        return (
            <>
                <div className={this.props.className}>
                    <Form onSubmit={this.verifyIdentity} className={'w-50 '}>
                        <FormGroup>
                            <Input onChange={(event) => this.setState({
                                password: event.target.value
                            })} type="password" name="password" id="pass" placeholder="Password that you got"
                                   style={{'fontSize': '25px', 'fontWeight': '600'}}/>
                        </FormGroup>
                        <Button block style={{
                            'backgroundColor': '#61dafb',
                            'border': 'none',
                            'fontSize': '25px',
                            'fontWeight': '600'
                        }}
                                onClick={this.verifyIdentity}>Lets Go!</Button>
                    </Form>

                </div>
                <div style={{
                    background: `url(${process.env.PUBLIC_URL}/tree.png`,
                    backgroundSize: "contain",
                    backgroundPosition: "center center"
                }} className={'bottomPic'}/>
            </>
        );
    }
}