import { Redirect } from "react-router"

const Home = ({ loggedIn }) => {
    return (
        <>
            {loggedIn ? <Redirect to='/newsdevitem' /> : <Redirect to='/login' />}
         
        </>
    )
}

export default Home