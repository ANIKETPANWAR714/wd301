import './TaskCard.css'

const TaskCardD = (props) => {
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>Completed on: {props.completionDate}</p>
      <p>Assignee:{props.assignee}</p>
    </div>
  )
}

export default TaskCardD;