import NavTabs from '../Components/NavTabs'
import { ArrowRightCircle } from "react-bootstrap-icons"

function LandingPage() {
    return (
        <>
            <NavTabs />
            <div className='landing-page-body'>
                <h1>PREPARE TO CHANGE</h1>
                <h1>FOR THE BETTER.</h1>
                <button><a href='#connect'>Let's Connect <ArrowRightCircle /></a></button>
            </div>
        </>
    )
}

export default LandingPage;