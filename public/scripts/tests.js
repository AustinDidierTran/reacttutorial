/**
 * Created by AustinDidierTran on 15-11-15.
 */

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
		render: function(){
				return (
						<div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
						</div>


				);

		}
});
var CommentList = React.createClass({
		render: function(){
				return (
						<div className="commentList">
                <Comment author="Austin-Didier Tran">This is a comment</Comment>
                <Comment author="Jeremie Bonsant">This is a dumb comment</Comment>
						</div>
				)
		}
});
var CommentForm = React.createClass({
    render: function(){
        return (
            <div className="commentForm">
                Hello World! I'm a comment form!
            </div>
        )
    }
});
var Comment = React.createClass({
    rawMarkup: function(){
        var rawMarkup = marked(this.props.children.toString(), {sanitize:true});
        return {__html: rawMarkup};
    },
    render: function(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        )
    }
});
ReactDOM.render(
		<CommentBox />,
		document.getElementById('content')
);
