import axios from 'axios'


const ALL_NEWS = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=ac157cacb088432180276283ed13c3c9'
const TOP_NEWS_BBC = 'https://newsapi.org/v2/sources?apiKey=ac157cacb088432180276283ed13c3c9'
const TECH_NEWS = 'https://newsapi.org/v2/everything?q=apple&from=2021-02-19&to=2021-02-19&sortBy=popularity&apiKey=ac157cacb088432180276283ed13c3c9'
const DEV_NEWS = 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=ac157cacb088432180276283ed13c3c9'
const SPORT_NEWS = 'http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=ac157cacb088432180276283ed13c3c9'
const HEALTH_NEWS = 'http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=ac157cacb088432180276283ed13c3c9'
const EVENTS = 'http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=ac157cacb088432180276283ed13c3c9'
const SERBIA = 'http://newsapi.org/v2/top-headlines?country=rs&apiKey=ac157cacb088432180276283ed13c3c9'
const MEMES = 'https://cat-fact.herokuapp.com/facts'
const ROCKETS = 'https://api.spacexdata.com/v4/rockets'

export const getAllNews = () =>  {
    return axios.get(ALL_NEWS)
}
export const getTopNewsBBC = () =>  {
    return axios.get(TOP_NEWS_BBC)
}
export const getTechNews = () =>  {
    return axios.get(TECH_NEWS)
}
export const getDevNews = () =>  {
    return axios.get(DEV_NEWS)
}
export const getSportNews = () =>  {
    return axios.get(SPORT_NEWS)
}
export const getHealthNews = () =>  {
    return axios.get(HEALTH_NEWS)
}
export const getEvents = () =>  {
    return axios.get(EVENTS)
}
export const getSerbiaNews = () =>  {
    return axios.get(SERBIA)
}
export const getAllMemes = () =>  {
    return axios.get(MEMES)
}
export const getAllRockets = () =>  {
    return axios.get(ROCKETS)
}

export const getAllUsers = () => axios.get('https://my-json-server.typicode.com/ivann-2612/my-news-app/users')

export const registerUser = (username,email,password) => axios.post('http://localhost:3005/users',{username,email,password})
