class MessageListEntry extends React.Component{
	constructor(props){
		console.log(props)
		super(props)
		this.state = {
			message: '',
			title: '' 
		}
	}

render(){
	return(
		<div className="message-list-entry">
		<div className="media-body">
        <div className="message-list-entry-title" onClick={() => this.props.selectBlog(this.props.blog)}>
        {this.props.blog.title}</div>
        </div>
        </div>
		)
}
}

window.MessageListEntry = MessageListEntry;




// var MessageListEntry = ({props}) => ( 
//   <div className="message-list-entry">
  
//     <div className="media-body">
//     <div className="message-list-entry-title" onClick={() => props.selectBlog(props.blog)}>{props.blog.title}</div>
//     </div>
//   </div>
// );

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// MessageListEntry.propTypes = {
//   message: React.PropTypes.object.isRequired
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.MessageListEntry = MessageListEntry;