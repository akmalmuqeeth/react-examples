class HelloWorld extends React.Component {
  render() {

    const date = new Date();
    return (
        <div>
          <p> Hello World</p>
          <p>Hello to the world, if that what it takes</p>
          <p>Current time: {date.toTimeString()}</p>
        </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('example'))


