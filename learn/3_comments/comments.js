/*http://bootsnipp.com/snippets/featured/comments-list*/

class CommentsBox extends React.Component {



	_getComments(){

		const commentsList = [
			{name : 'Alice', body : 'My first comment', days : '2' , id : 1, photoId : '1'},
			{name : 'Beth', body : 'So what', days : '3', id : 2,  photoId : '2'},
			{name : 'Carla', body : 'This is nice', days : '2', id : 3 , photoId : '8'},
			{name : 'Dave', body : 'lets see how it goes', days : '1', id : 4 , photoId : '4'},
			{name : 'Emily', body : 'I have my doubts', days : '4', id : 5, photoId : '5'}
		];

		return commentsList.map( comment => {
			return (<Comment days={comment.days} name={comment.name}  body={comment.body} key={comment.id} photoId={comment.photoId}/>);
		} )
	}

	render(){

		const comments = this._getComments();

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="page-header">
							<h1><small className="pull-right">{comments.length} comments</small> Comments </h1>
						</div>

						<div className="comments-list">
							{comments}
						</div>
					</div>
				</div>

			</div>
			
		);
	}
}

class Comment extends React.Component {
	render() {
		return (
			<div className="media">
				<p className="pull-right"><small>{this.props.days} days ago</small></p>
				<a class="media-left" href="#">
					<img src={`http://lorempixel.com/60/60/people/${this.props.photoId}/`}/>
				</a>
				<div className="media-body">

					<h4 className="media-heading user_name">{this.props.name}</h4>
					{this.props.body}

					<p><small><a href="">Like</a> - <a href="">Share</a></small></p>
				</div>
			</div>
		);
	}
}




ReactDOM.render(<CommentsBox />,document.getElementById('comments-demo'));