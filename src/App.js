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
import Weather from './components/Weather'



const App = () => {

  const [user,setUser] = useState(null)
  const [search, setSearch] = useState('')
let currYear = () => {
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

return `${date}-${month<10?`0${month}`:`${month}`}-${year}`
  }
 
  return (
    <Router>               
               <StyledNav>
              
                {
                    user ? 
                    <>
                     <Link style={{color:'#118ab2',border:'1px solid #118ab2'}} to="/SerbiaNewsList">Serbia News</Link>
                     <Link to="/newsSourcesList">Top World News</Link>
                     <Link to="/newsTechList">Top Tech News</Link>
                     <Link to="/newsDevList">Top Dev News</Link>
                     <Link style={{position:'absolute',left:'3%',top:'10%'}} to="/newsSportList">Sport News</Link>
                     <Link style={{position:'absolute',left:'18.6%',top:'10%'}} to="/NewsHealthList">Health News</Link>
                     <Link style={{position:'absolute',left:'35.1%',top:'10%'}} to="/EventsList">Top Events</Link>
                     <Link style={{position:'absolute',left:'50%',top:'10%'}} to="/newsList">Daily News</Link>
                     <Search setSearch={setSearch} search={search} /> 
            
                        <span>Username: {user.username}</span>
                        <button onClick={() => setUser(null)}>LOGOUT</button>
                        <h1>Pleaseee... no,no,no!!! <br/>Think again<img className='img-logout' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzKzq78v5mR90zMLSUptZxwSn8Zz0Pr0r-g&usqp=CAU" alt="BigCo Inc. logo"/></h1><br/>
                        
                                                
                       <StyledClock>
                            <Clock /> 
                        </StyledClock>
                                          
                    </>
                    
                    :
                    <> 
                    
                    <img className="logo" src='https://cdn.worldvectorlogo.com/logos/daily-news.svg' />
                    <br/><marquee scrollamount="8"><h3>THE BEST PLACE FOR QUALITY NEWS</h3></marquee>
                    <h1 className='year'> {currYear()} </h1>
                    <StyledMain>
                        <Main />
                   </StyledMain>
                    <Weather />
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
