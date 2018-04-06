import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isEditing:false
		}
		this.renderForm = this.renderForm.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.toggleState = this.toggleState.bind(this);
		this.updateItem = this.updateItem.bind(this);
	}
	updateItem(evt){
		evt.preventDefault();
		this.props.editTask(this.props.index,this.input.value)
		this.toggleState()
	}
	toggleState(){
		const {isEditing}=this.state;
		this.setState({
			isEditing:!isEditing
		})
	}
	renderItem(){
		return(
			<li onClick={ () => {
				this.props.clickHandler(this.props.index);
			}} className={this.props.detail.completed ? 'foo':''}>
				{this.props.detail.name}
				<button onClick={ (evt) => {
					evt.stopPropagation();
					this.props.deleteTask(this.props.index)
					}}>Delete
				</button>
				<button onClick={ (evt) => {
					evt.stopPropagation();
					this.toggleState()
					}}>Edit Item
				</button>
			</li>
		)
	}
	renderForm(){
		return(
			<form onSubmit={this.updateItem}>
			<input type="text" ref={(value)=>{
				this.input=value
			}} defaultValue={this.props.detail.name} />
			<button type="submit">Update Item</button>
			</form>
		)
	}
	
	
	render(){
		const {isEditing}=this.state;
	return(
		<section>
		{
			isEditing ? this.renderForm() : this.renderItem()
		}
		
		</section>
		
	)
	}
}

TodoItem.propTypes={
	clickHandler: PropTypes.func.isRequired, 
	index: PropTypes.number.isRequired,
	deleteTask: PropTypes.func.isRequired,
	editTask: PropTypes.func.isRequired,
	detail: PropTypes.object.isRequired
			
}

/*
const TodoItem = (props) =>{
	return(
		<li onClick={ () => {
			props.clickHandler(props.index);
		}} className={props.detail.completed ? 'foo':''}>
			{props.detail.name}
			<button onClick={ (evt) => {
				evt.stopPropagation();
				props.deleteTask(props.index)
				}}>Delete
			</button>
		</li>
		
	)
}
*/
export default TodoItem;