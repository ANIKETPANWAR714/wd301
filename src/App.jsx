import { useState } from 'react'
import TaskCard from './TaskCard'
import TaskCardD from './TaskCardD'



function App() {
  

  return (
    <div className='flex flex-col gap-[25px] justify-start items-center p-5 mr-5'>
      
      <h1 className='text-4xl font-extrabold'>Smarter Tasks</h1>
      <h3>Project:Graduation Final Year Project (Revamp College Website)</h3>
      <div className='flex flex-row gap-7 justify-center '>
      <div className='flex flex-col justify-center gap-5 border-4 border-black p-8 rounded-[20px]'>
        <h1 className='text-2xl font-bold text-center'>Pending</h1>
        <TaskCard title="Build the website with static content" heading="Due On" dueDate="10th April" assignee="Rohit S" />
        <TaskCard title="Add a Blog" heading="Due On" dueDate="22nd March" assignee="Rohit M"/>

      </div>
      <div className='flex flex-col justify-center gap-5 border-4 border-black p-8 rounded-[20px]'>
        <h1 className='text-2xl font-bold text-center'>Done</h1>
     
       
          <TaskCard  title="Design the mockup" heading="Completed On" completionDate="22nd March" assignee="Rohit M"/>
   
        
        <TaskCard  title="Get the approval from principal" heading="Completed On" completionDate="22nd March" assignee="Rohit M"/>
      </div>

      </div>

      
     
    </div>
  )
}

export default App
