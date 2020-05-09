import React from "react"
import LandingHeader from "../../components/LandingHeader/LandingHeader"
import Hero from "../../components/LandingPage/Hero"
import BodyA from "../../components/LandingPage/BodyA"
import BodyB from "../../components/LandingPage/BodyB"
import Footer from "../../components/Footer/Footer"
import SignupCall from "../../components/LandingPage/SignupCall"
import { Helmet } from "react-helmet"

const LandingPage = () => {
    return (
        <>
            <Helmet>
                <title>AdviceTracker | Never Forget Valuable Advice</title>
                <meta
                    name="description"
                    content="Track all of the awesome advice you are given, so you are always one step ahead. Find & save valuable advice on the way by browsing
                    user submitted advice."
                />
                <link rel="canonical" href="https://advicetracker.life/" />
            </Helmet>
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
