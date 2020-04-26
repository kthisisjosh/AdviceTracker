import React from "react"
import App from "../App"
import ShallowRenderer from "react-test-renderer/shallow"

const renderer = new ShallowRenderer()

describe("<App />", () => {
    it("should render and match the snapshot", () => {
        renderer.render(<App />)
        const renderedOutput = renderer.getRenderOutput()
        expect(renderedOutput).toMatchSnapshot()
    })
})

