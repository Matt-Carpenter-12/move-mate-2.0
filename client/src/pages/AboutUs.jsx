import NavTabs from '../Components/NavTabs'
import roger from '../assets/images/aboutimages/Roger.png'
import AboutCard from '../Components/AboutCard'
const aboutdata = [{
    img: roger, name: 'Roger', github: 'https://github.com/rogretheekyogre/React-Portfolio', description: 'blah blah blah'
}, {
    img: roger, name: 'Roger', github: 'https://github.com/rogretheekyogre/React-Portfolio', description: 'blah blah blah'
},{
    img: roger, name: 'Roger', github: 'https://github.com/rogretheekyogre/React-Portfolio', description: 'blah blah blah'

},{
    img: roger, name: 'Roger', github: 'https://github.com/rogretheekyogre/React-Portfolio', description: 'blah blah blah'

},{
    img: roger, name: 'Roger', github: 'https://github.com/rogretheekyogre/React-Portfolio', description: 'blah blah blah'

}]

function AboutUs() {
    return (
        <div className='d-flex'>
{aboutdata.map(data=>(
    <AboutCard info={data} key={data.name}/>
))}
        </div>
    )
}

export default AboutUs;