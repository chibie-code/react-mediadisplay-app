// import {tasks} from './TodoList';
//{useState, useRef, useEffect}
import React,{ useState, useRef, useEffect } from 'react';
import Input from './Input';
import Task from './Task';
import { nanoid } from 'nanoid';
import axios from 'axios';



const MainSection = ()=> {

  const[data, setData] = useState({
    x: '',
    y: '',
    z: ''
  });

  useEffect(()=>{
    axios.get('https://api.tvmaze.com/search/shows?q=peter%20pan')
    .then(res=>{
      console.clear();
      let dataItem = res.data[0].show;
      console.log('res.data[0].show',dataItem);
      for(let key in dataItem){
        console.log(`${key}: ${dataItem[key]}`);
        //return <li key={i}>item</li>
      }
      console.log(res);
      setData(p=>({
        image: dataItem.image.medium,
        title: dataItem.name,
        summary: [dataItem.summary]
      }));
    });
  },[]);

  return(
    <div
    className='bg-blue-500 h-full w-full grid grid-cols-6 grid-rows-4'>
    <div
    className='row-span-2 row-start-2 col-span-4 col-start-2 bg-white w-full h-full rounded shadow-lg flex flex-col justify-center items-center'>
    <span>
    <img src={data.image}/>
    <h1>{data.title}</h1>
    <span className='w-16 h-full'
    innerHTML={data.summary}>
    {console.log('data.summary',data.summary)}
    </span>
    </span>
    </div>
    </div>
  );
}

export default MainSection;
