import React from "react"
import ReactPlayer from "react-player"

export default class VideoBox extends React.Component {
    render() {
        return (
            <div className={"d-flex align-items-center justify-content-center pt-5 pb-5"}>
                <ReactPlayer
                    url={this.props.data.data}
                />
            </div>
        );
    }
}