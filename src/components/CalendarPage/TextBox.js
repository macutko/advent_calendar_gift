import React from "react"

export default class TextBox extends React.Component {
    render() {
        return (
            <div>
                <div className={"mt-5 mb-3 pl-2 pr-2 quoteBox"}>
                    {this.props.data.data}
                </div>

                {this.props.data.author !== "" || this.props.data.author !== undefined ?
                    <div className={"authorBox mb-5 "}>{this.props.data.author}</div> : null}

            </div>
        );
    }
}