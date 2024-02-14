"use client"
import React, { useState } from 'react'

const page = () => {
  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([]);
   
  const submitrefresh =(ele)=>{
    ele.preventDefault();
    setMainTask([...mainTask,{Title,Desc}]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  }
  const deletehandler = (i)=>{
    let prevtask = [...mainTask];
    prevtask.splice(i,1);
    setMainTask(prevtask);

  }
   let rendertask = <h1 className='text-xl'>No Task Available</h1>;

     if(mainTask.length>0){
      rendertask=mainTask.map((task,i) => {
       return (
        <li key={i} className='flex justify-between items-center mb-5'>
        <div className='w-2/3'>
        <h4 className='text-4xl  py-4 font-bold'>{task.Title}</h4>
        <p className='text-xl font-semibold'>{task.Desc}</p>
      </div>
      <button   onClick={()=>{
            deletehandler(i);
      }}
      className='bg-red-500 px-4 py-3 text-white font-bold rounded'>Delete</button>
      </li>
       )
      });
     };


  return (
   <>
      <h1 className='bg-black text-white p-6  text-4xl font-bold text-center'>
        Sukhman's ToDo list</h1>

        <form onSubmit={submitrefresh}>
          <input  type="text"
           className='border-zinc-900 border-4 text-3xl m-12 px-5 py-3'
           placeholder ='Enter Your Task Here'
           value={Title}
           onChange={(elem)=>{
              setTitle(elem.target.value)
           }}>
          </input>
          <input  type="text"
           className='border-zinc-900 border-4 text-3xl m-12 px-5 py-3'
           placeholder ='Enter Description Here'
           value={Desc}
           onChange={(elem)=>{
            setDesc(elem.target.value)
         }}>
          </input>
          <button className='bg-black text-white border-black border-4 text-3xl font-bold px-5 py-3 m-4 rounded'>Add Task</button>
     
        </form>
        
         <hr/>
         <div className='p-9 bg-slate-200'>
          <ul>{rendertask}</ul>
           
         </div>
   </>
  )
}

export default page