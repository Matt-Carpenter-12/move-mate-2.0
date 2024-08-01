import  'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from '../Components/NavTabs'


function Login() {
    return (
        <div>
            <NavTabs />
            <h1 className="login-header">SIGN IN TO YOUR MOVE MATE ACCOUNT</h1>
            <form>
                <div className="mb-3">
                    <label for="email input" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="password input" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}

export default Login;