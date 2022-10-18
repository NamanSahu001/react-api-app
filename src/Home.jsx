import React, { Suspense, lazy , useEffect, useState } from "react";
// import Details from "./Details";
import { Link } from "react-router-dom";
const Details = lazy(()=>import('./Details'));



const searchUrl ="http://localhost:3000/posts/"


function Home(){


  const [id , setId] = useState(0);
  const [det , setDet] = useState({});
  const [enter , setEnter] = useState(0);

  const getDetails = async () =>{
    let url;
    if(id){
      url = `${searchUrl}${id}`
    }else{
      url = `${searchUrl}`
      
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setDet(data);
    var res = det;
  }
 
  useEffect(()=>{
    getDetails();
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getDetails();
    setEnter(1);
  }
   function changeVal(){
    setEnter(0);
   }
   
    
    return(<div>
    
        <div className="container" style={{
            width: "22rem" ,
             paddingTop: "10rem"
             }}>
      
        <h1>React Api App</h1>
        
        <br></br>
         {(enter == 0)?(<form>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Enter Id</label>
        <input type="email" className="form-control" id="exampleInputEmail1"  
            value={id}
            onChange={(e) =>
              setId(e.target.value)}></input>
        <div id="emailHelp" className="form-text">Id should be between 1-10</div>
        <br></br>
        
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        
        </div>
        </form>):(<Suspense fallback={<div>Please wait...</div>}>
          <Details 
          id = {det.id}
          heading ={det.title}
          content = {det.body}
          onReturn={changeVal}
         />
         </Suspense>)}
          
          </div>
          </div>
 

    )

}


export default Home;