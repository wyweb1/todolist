import React from "react";

interface Props {
  inputChange: (text: string) => void;
  addItem: () => void;
}

class Form extends React.Component<Props> {
  inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.inputChange(e.target.value);
  };

  render() {
    return (
      <div>
        <input onChange={this.inputChange} />
        <button onClick={this.props.addItem}>addItem</button>
      </div>
    );
  }
}

export default Form;
