import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './component/todoItem.js';
import TodoForm from './component/todoForm.js';


class TodoList extends React.Component{
	constructor (props){
		super(props);
		this.state={
			tasks:[{
				name:"aden",
				completed:false
			},
			{
				name:"gold",
				completed:false
			},
			{
				name:"Person",
				completed:false
			}
			
			],
			currentTask:''
			
		}
		this.changeStatus=this.changeStatus.bind(this);
		this.updateTask=this.updateTask.bind(this);
		this.addTask=this.addTask.bind(this);
		this.deleteTask=this.deleteTask.bind(this);
		this.editTask=this.editTask.bind(this);
		
	}
	addTask(evt){
		evt.preventDefault();
		let tasks = this.state.tasks;
		let currentTask = this.state.currentTask;
		tasks.push({
			name:currentTask,
			completed:false
		})
		this.setState({
			tasks:tasks,
			currentTask:''
		})
	}
	deleteTask(index){
		let tasks = this.state.tasks;
		tasks.splice(index,1)
		this.setState({
			tasks
		})
	}
	updateTask(newValue){
		this.setState({
			currentTask:newValue.target.value
		})
	}
	changeStatus(index){
		console.log(this.state.tasks[index]);
		var tasks=this.state.tasks;
		var task = tasks[index];
		task.completed=!task.completed;
		this.setState({
			tasks:tasks
		})
	}
	editTask(index,newValue){
		console.log(index,newValue)
		var tasks=this.state.tasks;
		var task = tasks[index];
		task['name']=newValue;
		this.setState({
			tasks
		})
	}	
	render(){ 
		return (
		<section>
		<TodoForm 
			currentTask={this.state.currentTask} 
			updateTask={this.updateTask}
			addTask={this.addTask}
		/>
		<ul>
		{
			this.state.tasks.map((task,index)=>{
				return <TodoItem 
				detail={task} 
				key={index} 
				clickHandler={this.changeStatus} 
				index={index}
				editTask={this.editTask}
				deleteTask={this.deleteTask}
				/>
			})
		}
			
		</ul>
		</section>
		)
	}
}


	
ReactDOM.render(<TodoList/>,document.getElementById('root'));