//page for seeing created workouts for certain days
import Header from '../Components/Header'

function MyWorkouts() {
    
    const [exercises, setExercises] = useState([]);

    const url = 'http://localhost:3001/workouts';
    const options = {
        method: 'GET'
    }

    useEffect(() => {
        console.log('workouts page loaded')
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setExercises(data);
                // console.log(data[0]);
            })
            .catch(err => console.error(err.message))
    }, [])
    console.log(exercises);
    
    return (
        <>
            <Header />

        </>
    )
}

export default MyWorkouts;