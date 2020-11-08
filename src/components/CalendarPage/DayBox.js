import React from "react"
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import TextBox from "./TextBox";
import VideoBox from "./VideoBox";

export default class DayBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            opacity : 0.5
        }
    }

    toggleModal = () => {
        let d = new Date()

        if (this.props.day <= d.getDate()) {

            this.setState(prevState => ({
                isOpen: !prevState.isOpen
            }))
        }

    }
    componentDidMount() {
        let d = new Date()
        if (this.props.day <= d.getDate()) {

            this.setState(prevState => ({
                opacity: 1
            }))
        }

    }

    render() {
        return (
            <div className={`circle d-flex align-items-center justify-content-center`} onClick={this.toggleModal} style={{opacity:this.state.opacity}}>
                <div className={"number"}>
                    {this.props.day}
                </div>

                <Modal centered size={'lg'} isOpen={this.state.isOpen} toggle={this.toggleModal}>
                    <ModalBody className={'fontStyle'}>
                        <div className={"motivationBox"}>
                            <h2>KNOWLEDGE!</h2>
                            {this.props.data.motivation.type === "text" ? <TextBox data={this.props.data.motivation}/> : null}
                            {this.props.data.motivation.type === "link" ? <VideoBox data={this.props.data.motivation}/> : null}
                        </div>
                        <div className={"jokeBox"}>
                            <h2>not knowledge</h2>
                            {this.props.data.joke.type === "text" ? <TextBox data={this.props.data.joke}/> : null}
                            {this.props.data.joke.type === "link" ? <VideoBox data={this.props.data.joke}/> : null}
                        </div>
                    </ModalBody>
                    {/*<ModalFooter>*/}
                    {/*    <Button block style={{*/}
                    {/*        'backgroundColor': '#61dafb',*/}
                    {/*        'border': 'none',*/}
                    {/*        'fontSize': '25px',*/}
                    {/*        'fontWeight': '600'*/}
                    {/*    }} onClick={this.toggleModal}>Close</Button>{' '}*/}
                    {/*</ModalFooter>*/}
                </Modal>

            </div>
        );
    }
}