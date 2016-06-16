/*http://bootsnipp.com/snippets/featured/comments-list*/

class CommentsBox extends React.Component {

	constructor(){
		super();

		this.state = {
			showComments: true
		}
	}


	_getComments(){

		const commentsList = [
			{name : 'Alice', body : 'My first comment', days : '2' , id : 1, photoId : '1'},
			{name : 'Beth', body : 'So what', days : '3', id : 2,  photoId : '2'}
		];

		return commentsList.map( comment => {
			return (<Comment days={comment.days} name={comment.name}  body={comment.body} key={comment.id} photoId={comment.photoId}/>);
		} )
	}

	_handleClick(){
		this.setState({ showComments: !this.state.showComments })
	}

	render(){

		const comments = this._getComments();
		let commentNodes;
		let commentsSize = 0;
		let buttonText = (this.state.showComments) ? 'Hide Comments' : 'Show Comments';

		if(this.state.showComments ) {
			commentNodes = <div className="comments-list"> {comments} </div>
			commentsSize = comments.length;
		} else {
			commentNodes = <div className="comments-list"> <p> Sorry, comments are hidden</p> </div>
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="page-header">
							<h1> Comments <small className="pull-right">{commentsSize} comments</small></h1>
							<p><button onClick={this._handleClick.bind(this)} clasName="btn btn-primary">{buttonText}</button></p>
						</div>
						{commentNodes}

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