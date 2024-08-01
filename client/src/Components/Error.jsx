import { useRouteError } from 'react-router-dom';

function Error() {
    const error = useRouteError();
    return(
        <div id="error-page">
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but an unexpected error has occurred. Please try again later.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default Error;