import React from "react";
import Todo from "./Todo";

interface Props {
  todos: typeof import("./model").todos;
  deleteItem: (index: number) => void;
  delayDeleteItem: (index: number) => void;
}
interface State {
  todos: typeof import("./model").todos;
}
class List extends React.Component<Props, State> {
  deleteItem = this.props.deleteItem;
  delayDeleteItem = this.props.delayDeleteItem;

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, index) => {
            return (
              <Todo
                todo={todo}
                index={index}
                key={index}
                deleteItem={this.deleteItem}
                delayDeleteItem={this.delayDeleteItem}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
