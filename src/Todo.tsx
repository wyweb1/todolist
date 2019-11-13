import React from "react";

interface Props {
  todo: typeof import("./model").todos[0];
  index: number;
  deleteItem: (index: number) => void;
  delayDeleteItem: (index: number) => void;
}

class Todo extends React.Component<Props> {
  deleteItem = (index: number) => {
    this.props.deleteItem(index);
  };
  delayDeleteItem = (index: number) => {
    this.props.delayDeleteItem(index);
  };
  render() {
    return (
      <div>
        <li key={this.props.index}>
          <span
            style={{
              cursor: "pointer",
              textDecoration: this.props.todo.done ? "line-through" : "none"
            }}
          >
            {this.props.todo.text}
          </span>{" "}
          <button onClick={() => this.deleteItem(this.props.index)}>
            delete
          </button>{" "}
          <button onClick={() => this.delayDeleteItem(this.props.index)}>
            async delete (1 second delay)
          </button>
        </li>
      </div>
    );
  }
}

export default Todo;
