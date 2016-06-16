class ArrayDemo extends React.Component {

	render(){
		let numbers = ['One', 'Two', 'Three'];
		return (
			<div>
				<h2>Arrays Demo</h2>
				<ul>
					{numbers.map( num => <li> {num}</li> )}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<ArrayDemo />,document.getElementById('arrays-demo'));