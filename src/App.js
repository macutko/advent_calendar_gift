import './App.css';
import React from "react";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import AuthContext from "./components/AuthContext";
import LoginForm from "./components/LoginPage/LoginForm";
import SnowingBackground from "./components/SnowingBackground";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    logIn = () => {
        this.setState({
            loggedIn: true
        }, () => (
            this.state.password
        ))
    }

    render() {
        return (
            <AuthContext.Provider value={{
                loggedIn: this.state.loggedIn, logIn: this.logIn
            }}>
                <SnowingBackground>
                    {this.state.loggedIn ?
                        <CalendarPage className={'calendarPage d-flex align-items-center justify-content-center'}/>
                        :
                        <LoginForm history={this.props.history}
                                   className={'loginPage d-flex align-items-center justify-content-center'}/>

                    }
                </SnowingBackground>
            </AuthContext.Provider>
        );
    }
}

