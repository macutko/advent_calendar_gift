import React from "react"
import Snowfall from "react-snowfall";
import './style.css'

export default class SnowingBackground extends React.Component {
    render() {
        return (
            <div className={'bgPage'}>
                <Snowfall color={'white'} snowflakeCount={200}/>
                {this.props.children}
            </div>
        );
    }
}