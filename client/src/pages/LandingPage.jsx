import NavTabs from '../Components/NavTabs'
import { ArrowRightCircle } from "react-bootstrap-icons"
import '../assets/css/landingpage.css'

function LandingPage() {
    return (
        <>
            <NavTabs />
            <div className='landing-page-body'>
                <h1 className='header1'>PREPARE TO</h1>
                <h1 className='header2'>CHANGE</h1>
                <h1 className='header3'>FOR THE BETTER.</h1>
                <button><a href='/Sign-Up'>Sign Up<ArrowRightCircle /></a></button>
            </div>
        </>
    )
}

export default LandingPage;