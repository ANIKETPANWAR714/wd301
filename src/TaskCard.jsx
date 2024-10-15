import './TaskCard.css'

const TaskCard = (props) => {
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{props.heading}: {props.dueDate}</p>
      <p>Assignee:{props.assignee}</p>
    </div>
  )
}

export default TaskCard;