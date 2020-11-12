import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid" 
// for every component that will be accessing the state data, 
// you will need to declare the state object in the file of their closest common parent. 
// For this reason, the state data will live in the TodoContainer component, 
// which is their closest common parent.
class TodoContainer extends React.Component{

    state = {
        todos: [
          {
            id: uuidv4(),
            title: "Setup react development environment",
            completed: true
          },
          {
            id: uuidv4(),
            title: "Create to-do app with React.js",
            completed: false
          },
          {
            id: uuidv4(),
            title: "Share the project on Github",
            completed: false
          }
        ]
       };

       handleChange = (id) => {
         this.setState({
           todos:this.state.todos.map(todo=>{
             if(todo.id===id){
               todo.completed=!todo.completed;
             }
             return todo;
           })
         })
        console.log("clicked",id);
      };

      deleteTodo = id => {
        this.setState({
          todos:[
            ...this.state.todos.filter(todo=>{
              return todo.id !== id;
            })
          ]
        });
        console.log("deleted", id);
      };


      addTodoItem = title =>{
       
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
        };
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
        console.log(title);
    
      };

      
    render(){
        return(
            
            <div className="container">
                <Header />
                <InputTodo addTodoItemProps={this.addTodoItem} />
                <TodosList 
                todos={this.state.todos} 
                handleChangeProps={this.handleChange} 
                deleteTodoProps={this.deleteTodo}
                />
            </div>
        );
    }
}
export default TodoContainer;