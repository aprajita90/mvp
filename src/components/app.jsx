// import { AppRegistry, StyleSheet, Text, View } from 'react-native';


class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		  message: this.props.message,
		  selectedBlog:{},
		  othermessage: ''
		}
	}
	refresh(){
		var self = this;
		var callBack = function(data){
			console.log("All data",data);
			self.setState({
	  		message : data
	  	})	
		}
		var callBack1 = function(data){
			console.log("All data",data);
			self.setState({
	  		othermessage : data
	  	})
		}
		this.getBlog('/blog', callBack);
		this.getOtherBlog('/message', callBack1);

	}
	componentWillMount() {
		console.log("data:", this.state.message);
		this.authenticate();
		
    }
    authenticate() {
    	var self = this;
    	$.get('/authenticate', {//get return promise
    
  		})
	  .done(function(data) {
	  	if(data) {
	  		console.log(data)
	  		self.refresh();
	  	} else {
	  		self.props.router.push('/login');
	  	}
	  })
	  .fail(function(){});
    }
    getBlog(url, callBack){
    	$.get(url)
    	.then(callBack)
    	.fail(function(){});
    }


    getOtherBlog(url, callBack){
    	$.get(url)
    	.then(callBack)
    	.fail(function(){});
    }
	post(message){
    	var self = this;
    	$.post('/blog', {message : message.message, title : message.Title})//request to sever

    	.done(function(data){//responce give to client from server
    		console.log(data);
    // 		self.setState({
	  	// 	message : data.message
	  	// });
    		self.refresh();
    	})
    	.fail(function(err) {//when sever give errors
    		console.log(err)
    	});
    }
    logout(){
    	var self = this;
    	$.get('/logout')
    	.done(function(){
    		self.props.router.go('/')
    	})
    }

	selectBlog(blog){
		console.log(blog)
    	this.setState({
    		selectedBlog: blog 
	  	})	
    }
    // newBlog(){
    // 	this.setState({
    // 		selectedBlog: {
    // 			title: '',
    // 			message:''
    // 		}
    // 	})

    // }
     //<br></br><button onClick={() => this.newBlog()}>New Blog</button>
    
  
	render(){
		return(
		<div>
		<h1> User Blog </h1>
		<span>
		<div>
		<label for="Title">Title</label><br></br>
		<input type = '' name = 'Title' id = 'Title' value = {this.state.selectedBlog.title}></input><br></br><br></br>
		<label for="Blog">Blog</label><br></br>
		<textarea rows="4" cols="50" id ='Blog' value = {this.state.selectedBlog.message}></textarea><br></br><br></br>
		<button onClick={() => this.post({message:document.getElementById('Blog').value, Title:document.getElementById('Title').value})} >Save Blog</button>&nbsp;&nbsp;
          
        <button onClick={() => this.logout()}>logout</button>
		</div>
		</span>
		<span>
		<div>
		<h2>My Blog List</h2>
		<MessageList messages={this.state.message} selectBlog = {this.selectBlog.bind(this)}/>
		</div>
		<div>
		<h2>Other Blog List</h2>
		<MessageList messages={this.state.othermessage} selectBlog = {this.selectBlog.bind(this)}/>
		</div>
		</span>
		</div>
		)
	}
}