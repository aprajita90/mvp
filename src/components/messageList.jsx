class MessageList extends React.Component{
	constructor(props){
		console.log(props)
		super(props)
		this.state = {

		}
	}
	render(){
		return(

			!this.props.messages ? <div className="message-show">no blog</div>:
			  <div >
			    {this.props.messages.map(blog => <MessageListEntry blog={blog} selectBlog ={this.props.selectBlog} />
			    )}
			  </div>
			);
	}
}




// var MessageList = ({messages, selectBlog}) => (
//   //<div> {messages}</div>
//   !messages ? <div className="message-show">no blog</div>:
//   <div >
//     {messages.map(blog => <MessageListEntry blog={blog} selectBlog ={selectBlog} />
//     )}
//   </div>
// );


window.MessageList = MessageList;