import ErrorMessage from "../errorMessage/ErrorMessage";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content='Page404'
                />
                <title>Page404</title>
            </Helmet>
            <ErrorMessage />
            <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>Page doesn't exist</p>
            <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px' }} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;