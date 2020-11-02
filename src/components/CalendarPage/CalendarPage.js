import React from "react"
import './style.css'
import quotes from "../quotes";
import {Col, Row} from "reactstrap";
import DayBox from "./DayBox";

export default class CalendarPage extends React.Component {

    render() {
        let row = {}
        for (let i = -1; i < 8; i++) {
            row[i+1] = ([quotes[i + 1], quotes[i + 2], quotes[i + 3]])
        }
        return (
            <div className={'calendarPage'}>
                {
                    row.map(item => (
                        <Row>
                            <Col>
                                <DayBox day={item.key} data={item.data}/>
                            </Col>
                            <Col>
                                <DayBox day={item.key} data={item.data}/>
                            </Col>
                            <Col>
                                <DayBox day={item.key} data={item.data}/>
                            </Col>
                        </Row>
                    ))
                }
            </div>
        );
    }
}