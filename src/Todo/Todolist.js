import React, { Component } from 'react';

class Todolist extends Component {
    
    constructor() {
        super();
        this.state = {
            userInput: "",
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: "",
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(event) {
        event.preventDefault();
        const array = this.state.items;
        const index = array.lastIndexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        })

    }

    renderTodo() {
        return this.state.items.map((item) =>{
            return (
                <div align="center" className='list-group-item' key={item} style={{
                    marginTop:"40px",
                    maxHeight:"70px",
                    maxWidth:"32.3rem",
                    marginLeft:"298px"
                    }}>
                    {item} 
                    <span> 
                        <button style={{
                            position:"absolute",
                            left:"448px",
                            bottom:"4.8px",
                            borderRadius:"4px",
                            backgroundColor:"pink",
                            color:"white"

                        }}
                            onClick={this.deleteTodo.bind(this)}>
                            Delete
                        </button>
                    </span>
                </div>
            )
        })
    }

    render() {
        return(
            <div>
                <h1 align="center">Ma ToDo List</h1>
                <div  align="center">
                <form className='form-row align-item-center'>
                    <input
                    style={{maxWidth:"32.3rem"}}
                        value={this.state.userInput}
                        type="text"
                        placeholder="Ecriver une tache"
                        onChange={this.onChange.bind(this)}
                        className='form-control mb-2'
                    />
                    <button 
                    onClick={this.addTodo.bind(this)}
                    className='btn btn-primary'
                    >
                        Ajouter
                    </button>
                </form>
                </div>
                <div className='list-group'>
                    {this.renderTodo()}
                </div>
            </div> 
        )
    }
}

export default Todolist ;