import React from 'react';

class Learning_29062025 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  }

  render() {
    let Myheader;
    if (this.state.show) {
      Myheader = <Child />;
    }
    return (
      <div>
        {Myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>Good Morning</h1>;
  }
}

export default Learning_29062025;
