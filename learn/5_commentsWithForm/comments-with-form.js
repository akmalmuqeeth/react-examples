/*http://bootsnipp.com/snippets/featured/comments-list*/

class CommentsBox extends React.Component {

	constructor(){
		super();

		this.state = {
			showComments: true,
			commentsList : [
				{name : 'Alice', body : 'My first comment', days : '2' , id : 1, photoId : '1'},
				{name : 'Beth', body : 'So what', days : '3', id : 2,  photoId : '2'}
			]
		}
	}


	_getComments(){

		return this.state.commentsList.map( comment => {
			return (<Comment days={comment.days} name={comment.name}  body={comment.body} key={comment.id} photoId={comment.photoId}/>);
		} )
	}

	_handleClick(){
		this.setState({ showComments: !this.state.showComments })
	}

	 _addComment(name, body) {
		 let newComment = {name : name.value, body : body.value, days : '0', id : this.state.commentsList.length + 1,  photoId : `${this.state.commentsList.length + 1}`};
		 this.setState({commentsList : this.state.commentsList.concat([newComment])})
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
						<CommentForm addComment={this._addComment.bind(this)}/>
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

class CommentForm extends React.Component {

	_handleSubmit(event){
		//prevent page from re-loading
		event.preventDefault();

		let author = this._author;
		let comment = this._comment;

		if(!author || !comment) {
			return;
		}

		this.props.addComment(author, comment)

	}

	render(){
		return (
			<div className="row">
				<div className="span6">
					<form onSubmit={this._handleSubmit.bind(this)}>
						<div className="controls controls-row">
							<input id="name" name="name" ref={(input) => this._author = input} type="text" className="span3" placeholder="Name" />
						</div>
						<div className="controls">
							<textarea id="message" name="message" ref={(textarea) => this._comment = textarea} className="span6" placeholder="Your Message" rows="5"></textarea>
						</div>

						<div className="controls">
							<button id="contact-submit" type="submit" className="btn btn-primary input-medium pull-right">Send</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}




ReactDOM.render(<CommentsBox />,document.getElementById('comments-demo'));