import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Login from './components/Login'
import {Clock} from './components/Clock'
import Register from './components/Register'
import Home from './components/Home'
import Main from './components/Main'
import NewsList from './components/NewsList'
import SerbiaNewsList from './components/SerbiaNewsList'
import EventsList from './components/EventsList'
import NewsHealthList from './components/NewsHealthList'
import NewsSportList from './components/NewsSportList'
import NewsTechList from './components/NewsTechList'
import NewsDevList from './components/NewsDevList'
import NewsSourcesList from './components/NewsSourcesList'
import {StyledNav} from './styledComponents/StyledNav'
import {StyledClock} from './styledComponents/StyledClock'
import {StyledNewsSection} from './styledComponents/StyledNewsSection'
import {StyledMain} from './styledComponents/StyledMain'
import {StyledMain2} from './styledComponents/StyledMain2'
import {StyledMain3} from './styledComponents/StyledMain3'
import {StyledNewsSourceList} from './styledComponents/StyledNewsSourceList'
import Search from './components/Search'
import Main2 from './components/Main2'
import Main3 from './components/Main3'



const App = () => {

  const [user,setUser] = useState(null)
  const [search, setSearch] = useState('')
 
 
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
                     <Search setSearch={setSearch} /> 
            
                        <span>Username: {user.username}</span>
                        <button onClick={() => setUser(null)}>LOGOUT</button>
                        <StyledClock>
                            <Clock /> 
                        </StyledClock>
                                          
                    </>
                    
                    :
                    <> 
                    <img src='https://cdn.worldvectorlogo.com/logos/daily-news.svg' style={{width:'200px',backgroundColor:'white',padding:'12px',marginTop:'-20px',marginBottom:'15px',boxShadow: '0px 0px 12px #f7f4f7'}} />
                    <br/><marquee scrollamount="8"><h3>THE BEST PLACE FOR QUALITY NEWS</h3></marquee>
                    <StyledMain>
                        <Main />
                    </StyledMain>
                    <StyledMain2>
                    <Main2/>
                    </StyledMain2>
                    <StyledMain3>
                        <Main3 />
                    </StyledMain3>
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
