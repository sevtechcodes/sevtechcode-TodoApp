import React, {Component} from "react"

// the InputTodo component will carry the responsibility of accepting the user’s input. 
// That means we will need a place to store the data (in this case, the store is the state) received through the input. 
// From there, we can display the data in the frontend.
class InputTodo extends Component{
    state={
        title: "",
    };

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        // burda bir eksiklik olabilir
       this.props.addTodoItemProps(this.state.title);
        this.setState({
          title: ""
        });
      };

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                {/* Since we will be getting data through the user’s 
                interaction (i.e through the input field), 
                this component will, therefore, hold state. 
                For that reason, it will be a class-based component. */}
                <input 
                    type="text" 
                    className="input-text"
                    placeholder=" Add Todo..." 
                    value={this.state.title} 
                    name="title"
                    onChange={this.onChange}
                />
                <input type="submit" className="input-submit" value="Submit"/>
            </form>
        )
    }
}
export default InputTodo