import  React,{ useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar,Nav,Container,Form, FormControl,Button } from "react-bootstrap";

function App() {
  const API_URL='https://api.themoviedb.org/3/movie/popular/?api_key=69a55fd45693a4e6785e57c27d6bc204'
 
//  const API_SEARCH='https://api.themoviedb.org/3/search/movie?api_key=69a55fd45693a4e6785e57c27d6bc204&query'

 const [query,setQuery]=useState('')
  const [getMovies,setMovies] =useState([])

  
  useEffect(()=>
  {
   fetch(API_URL).then((res)=>res.json()).then((data)=>{
    
    setMovies(data.results)})
   
  },[])

   const setSearchMovies=async(e)=>{
    e.preventDefault()
    console.log("Searching");
    try{
      // const url=`https://api.themoviedb.org/3/search/movie?api_key=69a55fd45693a4e6785e57c27d6bc204&query= ${query}`;
      // const res=await fetch(url);
      // const data= await res.json()
      // console.log(data)
      // setMovies(data.results)
      await fetch(`https://api.themoviedb.org/3/search/movie?api_key=69a55fd45693a4e6785e57c27d6bc204&query= ${query}`).then((res)=> res.json()).then((data)=>{
    
      setMovies(data.results)})
     
    }
    
    catch(e)
    {
      console.log(e)
    }
   }
  const changeHandler=(e)=>{
    setQuery(e.target.value)
  }
      const reRenderMovies=getMovies.map((movies)=>
      { return  <MovieBox {...movies} key={movies.id} />})

  return (

    <>
<Navbar expand="lg" bg="dark" variant="dark">
<Container fluid> 
<Navbar.Brand href="/home">MovieDB App</Navbar.Brand>
      <Navbar.Brand href="/home">Trends</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
         <Nav className="me-auto my-2 my-lg-3" style={{maxHeight:'100px'}} navbarScroll></Nav>
         <Form className="d-flex"  onSubmit={setSearchMovies}>
         <FormControl className="me-2" type="search" placeholder="Movie Search" aria-label="search" name="query" value={query} onChange={changeHandler}></FormControl>
         
         <Button variant="secondary" type="submit">Search</Button></Form> 
        </Navbar.Collapse>
      </Container>
     
</Navbar>

         <div className=" w-screen" >
    <div className='grid grid-cols-3 ml-6 pt-6 '> {reRenderMovies }</div>
      
    </div>

    </>
    
  );
}

//how to connect php database?

//how to center a div?


 

 
export default App;
