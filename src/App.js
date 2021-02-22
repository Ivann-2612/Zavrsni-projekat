import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import NewsList from './components/NewsList'
import SerbiaNewsList from './components/SerbiaNewsList'
import EventsList from './components/EventsList'
import NewsHealthList from './components/NewsHealthList'
import NewsSportList from './components/NewsSportList'
import NewsTechList from './components/NewsTechList'
import NewsDevList from './components/NewsDevList'
import NewsSourcesList from './components/NewsSourcesList'
import {StyledHeader} from './styledComponents/StyledHeader'
import {StyledNav} from './styledComponents/StyledNav'
import {StyledNewsSection} from './styledComponents/StyledNewsSection'
import {StyledNewsSourceList} from './styledComponents/StyledNewsSourceList'


const App = () => {

  const [user,setUser] = useState(null)
 
  return (
    <Router>
               <StyledNav>
                {
                    user ? 
                    <> 
                     <Link to="/newsList">Daily News</Link>
                     <Link to="/newsSourcesList">Top World News</Link>
                     <Link to="/newsTechList">Top Tech News</Link>
                     <Link to="/newsDevList">Top Dev News</Link>
                     <Link style={{position:'absolute',left:'2%',top:'10%'}} to="/newsSportList">Sport News</Link>
                     <Link style={{position:'absolute',left:'14.6%',top:'10%'}} to="/NewsHealthList">Health News</Link>
                     <Link style={{position:'absolute',left:'28.1%',top:'10%'}} to="/EventsList">Top Events</Link>
                     <Link style={{position:'absolute',left:'40.6%',top:'10%',color:'#118ab2',border:'1px solid #118ab2'}} to="/SerbiaNewsList">Serbia News</Link>
                    
                        <span>Username: {user.username}</span>
                        <button onClick={() => setUser(null)}>LOGOUT</button> 
                       
                    </>
                    :
                    <> 
                    <marquee scrolldelay="90"><h1 className='top'>TOP WORLD NEWS</h1>
                    </marquee><br/><marquee scrollamount="10"><h3>DAILY NEWS</h3></marquee>
                    <StyledHeader>
                        <Link className='login' to="/login">Loginn</Link>
                        <Link className='register' to="/register">Register</Link>
                    </StyledHeader>
                    </>
                }
            </StyledNav>
            
      <Switch>
        <StyledNewsSection>
                <Route path="/login">
                    <Login setUser={setUser} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/newsList">
                    <NewsList loggedIn={user} />
                </Route>
                <StyledNewsSourceList>
                <Route path="/newsSourcesList">
                    <NewsSourcesList loggedIn={user} />
                </Route>
                <Route path="/newsTechList">
                    <NewsTechList loggedIn={user} />
                </Route>
                <Route path="/newsDevList">
                    <NewsDevList loggedIn={user} />
                </Route>
                <Route path="/newsSportList">
                    <NewsSportList loggedIn={user} />
                </Route>
                <Route path="/NewsHealthList">
                    <NewsHealthList loggedIn={user} />
                </Route>
                <Route path="/EventsList">
                    <EventsList loggedIn={user} />
                </Route>
                <Route path="/SerbiaNewsList">
                    <SerbiaNewsList loggedIn={user} />
                </Route>
                </StyledNewsSourceList>
                <Route path="/">
                    <Home loggedIn={user} />
                </Route>
        </StyledNewsSection>    
      </Switch>  
    </Router>
  )
}

export default App;
