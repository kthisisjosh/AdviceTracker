import React from "react"
import Scroll from "react-scroll"
import InboxElement from "./InboxElement"
import Inbox from "./Inbox"

var Element = Scroll.Element
var Events = Scroll.Events
var scroll = Scroll.animateScroll
var scrollSpy = Scroll.scrollSpy

class InboxScrollPane extends React.Component {
    constructor(props) {
        super(props)
    }

    handleAdd(event) {
        console.log("add")
        console.log(event);
    }

    handleDelete(event) {
        console.log("Delete")
        console.log(event);
    }

    componentDidMount() {
        Events.scrollEvent.register("begin", function () {
            console.log("begin", arguments)
        })

        Events.scrollEvent.register("end", function () {
            console.log("end", arguments)
        })

        scrollSpy.update()
    }

    componentWillUnmount() {
        Events.scrollEvent.remove("begin")
        Events.scrollEvent.remove("end")
    }

    render() {
        return (
            <Element
                className="element"
                id="containerElement"
                style={{
                    overflow: "scroll",
                    overflowX: "hidden",
                    height: "13vw",
                    width: "100%",
                    marginTop: "1vh",
                }}
            >
                
                <InboxElement handleAdd={this.handleAdd} handleDelete={this.handleDelete} key="1"/>

            </Element>
        )
    }
}

export default InboxScrollPane
