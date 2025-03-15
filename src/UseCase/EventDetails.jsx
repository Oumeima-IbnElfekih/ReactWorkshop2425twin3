import { useState,useEffect } from "react";
import events from "../data/events.json";
import { useParams } from "react-router-dom";
import { getallEvents } from "../services/api";

export default function EventDetails() {
    const {name} = useParams();
    console.log(name)
  //const e = events.find(e => e.name === name)
  const [e,setE]=useState();
  useEffect(()=>{
  
        const fetchEvent = async ()=>{
      
  
          const e = await getallEvents(name)
    
          setE(e.data)
          console.log(e)
    
        };
  
        fetchEvent();
  
      },[])

    return <div>

{e ? <p>Le nom de l'évenement {e.name}</p> : <p>Not found</p>}

    </div>
}