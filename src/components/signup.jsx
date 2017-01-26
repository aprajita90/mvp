class Signup extends React.Component{
	constructor(props){
		super(props)
	}
	post(signup){
		console.log(signup);
    	var self = this;

    	//console.log(login.login);
    	$.post('/signup', {username: signup.username, password: signup.password})//(req)post to server from client

    	.done(function(data){ //responce to client from server
    		if(data) {
    			self.props.router.push('/')
    		} else {
    			self.props.router.push('/login')
    		}
    	})
    	.fail(({responseJSON}) => {
	    responseJSON.error.errors.forEach((err) =>
	      console.error(err)
	    );
	  });
    }
	render(){
		return(
		<div>
		<h2> Signup </h2><br></br>
		<div>
		<label for="username">Username:</label>&nbsp;&nbsp;
		<input id="username" type = 'text' placeholder = "Enter username"></input><br></br><br></br>
		<label for="password">Password:</label>&nbsp;&nbsp;
		<input id="password" type = 'password' placeholder = "Enter password"></input><br></br>
		</div><br></br>
		<div>
	    <button onClick={() => this.post({username:document.getElementById('username').value,password:document.getElementById('password').value})}>signup</button>
	    </div>
		</div>
		)
	}
}
window.Signup = Signup;