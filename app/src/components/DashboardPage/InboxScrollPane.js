import React, { useEffect } from "react"
import Scroll from "react-scroll"
import InboxElement from "./InboxElement"
import AddElement from "./AddElement"

var Element = Scroll.Element
var Events = Scroll.Events
var scroll = Scroll.animateScroll
var scrollSpy = Scroll.scrollSpy

const InboxScrollPane = (props) => {
    const handleAdd = (event) => {
        console.log("add")
        console.log(event)
    }

    const handleDelete = (event) => {
        console.log("Delete")
        console.log(event)
    }

    useEffect(() => {
        Events.scrollEvent.register("begin", function () {
            console.log("begin", arguments)
        })

        Events.scrollEvent.register("end", function () {
            console.log("end", arguments)
        })
        scrollSpy.update()
        return () => {
            Events.scrollEvent.remove("begin")
            Events.scrollEvent.remove("end")
        }
    })

    return (
        <Element
            className="element"
            id="containerElement"
            style={{
                overflow: "scroll",
                overflowX: "hidden",
                height: "15vw",
                width: "100%",
                marginTop: "1vh",
            }}
        >
            {props.toAdd && <AddElement handleEditorChange={props.handleEditorChange} handleSubmit={props.handleSubmit} />}

            {props.inbox.map((advice) => (
                <InboxElement advice={advice} handleAdd={handleAdd} handleDelete={handleDelete} key={advice.content} />
            ))}
        </Element>
    )
}

export default InboxScrollPane
