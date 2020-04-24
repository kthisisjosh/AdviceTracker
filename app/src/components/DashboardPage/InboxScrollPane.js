import React from "react"
import Scroll from "react-scroll"
import { Paper, Grid, Typography } from "@material-ui/core"

var Element = Scroll.Element
var Events = Scroll.Events
var scroll = Scroll.animateScroll
var scrollSpy = Scroll.scrollSpy

class InboxScrollPane extends React.Component {
    constructor(props) {
        super(props)
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
                <Element style={{margin: "2vh"}}>
                    <Grid item style={{ width: "100%" }}>
                        <Paper>
                            <Typography variant="body1" style={{marginLeft: "1.5vw", marginRight: "1.5vw", paddingTop: "1.5vh", paddingBottom: "1.5vh"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur lobortis ex a vulputate. Duis tempor purus
                                in nisl tempor dignissim vitae eget lectus. Proin dignissim aliquet felis, placerat aliquam tellus ultrices in. Etiam
                                condimentum fringilla urna, vel commodo metus cursus vel. Donec nulla justo, consequat ut pretium vitae, mattis ut.
                            </Typography>
                        </Paper>
                    </Grid>
                </Element>

            </Element>
        )
    }
}

export default InboxScrollPane
