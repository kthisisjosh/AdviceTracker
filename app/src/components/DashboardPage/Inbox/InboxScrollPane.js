import React, { useEffect } from "react"
import Scroll from "react-scroll"
import InboxElement from "./InboxElement"
import AddElement from "./AddElement"
import { motion, AnimatePresence } from "framer-motion"

var Element = Scroll.Element
var Events = Scroll.Events
var scrollSpy = Scroll.scrollSpy

const InboxScrollPane = (props) => {
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
                height: "auto",
                minHeight: "18vw",
                width: "100%",
                marginTop: "1vh",
            }}
        >
            {props.toAdd && (
                <motion.div initial={{ scale: 1, opacity: 0 }} animate={{ opacity: 1 }} positionTransition>
                    <AddElement handleEditorChange={props.handleEditorChange} handleSubmit={props.handleSubmit} />
                </motion.div>
            )}

            <AnimatePresence>
                {props.inbox.map((advice) => (
                    <InboxElement
                        advice={advice}
                        handleAddToCategory={props.handleAddToCategory}
                        handleDelete={props.handleDelete}
                        key={advice.adviceID}
                    />
                ))}
            </AnimatePresence>
        </Element>
    )
}

export default InboxScrollPane
