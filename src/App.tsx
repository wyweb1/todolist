import React from "react";
import { todos } from "./model";
import List from "./List";
import Form from "./Form";

const completedTodos = 0;
const totalTodos = todos.length;
interface Props {}
interface State {
  text: string;
  todos: typeof todos;
}
class App extends React.Component<Props, State> {
  // TODO: count completed todos
  constructor(props: Props) {
    super(props);
    this.state = {
      text: "",
      todos: todos
    };
  }
  deleteItem = (index: number) => {
    let todos = this.state.todos;
    todos.splice(index, 1);
    // todos[index].done = !todos[index].done;
    this.setState({
      todos: todos
    });
  };

  delayDeleteItem = (index: number) => {
    // console.log("延时了");
    setTimeout(() => {
      this.deleteItem(index);
    }, 1000);
  };

  inputChange = (text: string) => {
    this.setState({
      text: text
    });
  };
  addItem = () => {
    let todos = this.state.todos;
    todos = [...this.state.todos, { text: this.state.text }];
    this.setState({
      // text: "",
      todos: todos
    });
  };

  render() {
    return (
      <div>
        {completedTodos} of {totalTodos} todos are done!
        {/* <List todos={[]} /> */}
        <List
          todos={this.state.todos}
          deleteItem={this.deleteItem}
          delayDeleteItem={this.delayDeleteItem}
        />
        <Form addItem={this.addItem} inputChange={this.inputChange} />
      </div>
    );
  }
}

export default App;
