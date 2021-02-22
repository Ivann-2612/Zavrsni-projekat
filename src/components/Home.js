import { Redirect } from "react-router"

const Home = ({ loggedIn }) => {
    return (
        <>
            {loggedIn ? <Redirect to='/newsList' /> : <Redirect to='/login' />}
        </>
    )
}

export default Home