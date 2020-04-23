import React from "react"
import LandingHeader from "../../components/LandingHeader/LandingHeader"
import Hero from "../../components/LandingPage/Hero"
import BodyA from "../../components/LandingPage/BodyA"
import BodyB from "../../components/LandingPage/BodyB"
import Footer from "../../components/Footer/Footer"
import SignupCall from "../../components/LandingPage/SignupCall"

const LandingPage = () => {
    return (
        <>
            <LandingHeader />
            <Hero />
            <BodyA />
            <BodyB />
            <SignupCall />
            <Footer />
        </>
    )
}

export default LandingPage
