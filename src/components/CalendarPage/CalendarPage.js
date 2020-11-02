import React from "react"
import './style.css'
import quotes from "../quotes";
import {Col, Container, Row} from "reactstrap";
import DayBox from "./DayBox";

export default class CalendarPage extends React.Component {

    render() {
        let elts = [];
        quotes.forEach( (item,index) => {
            elts.push(
                <Col className={'mb-5 '} key={"col_"+index}>
                    <DayBox day={item.day} data={item.data}  />
                </Col>
            )
        } )
        let rows = [];
        for (let i=0;i<24;i+=6){
            rows.push(
                <Row key={i}>
                    {elts.slice(i,6+i)}
                </Row>
            )
        }



        return (
            <div className={this.props.className}>
                <Container className={'h-100'}>
                {
                    rows.map((item,i)=>(item))
                }
                </Container>
            </div>
        );
    }
}