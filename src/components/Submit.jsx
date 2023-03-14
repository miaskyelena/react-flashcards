import React from "react";

class Submit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Submit Successgu: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="submit">
            <form onSubmit={this.handleSubmit}>
                <label>
                 Guess the answer header:  
                 <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Submit" />
             </form>
         </div>
      );
    }
  }

export default Submit; 