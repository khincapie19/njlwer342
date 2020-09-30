import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput : "",
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
    }
  }

  updateName(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  addItem(event) {
    event.preventDefault();

    if (this.state.userInput !== '') {
      const newArray = [...this.state.tasks];
      newArray.push(this.state.userInput);

      this.setState({
        userInput: "",
        tasks: newArray
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) =>
              <li key={index}>{task}</li>
            )}
          </ul>
           <form onSubmit={this.addItem.bind(this)}>
             <input type="text" id="new-task"
              value = {this.state.userInput}
              onChange={this.updateName.bind(this)}
              placeholder="Ingresa una tarea y oprime Enter"/>
           </form>
        </div>
      </div>
    )
  }
}


export default App;
