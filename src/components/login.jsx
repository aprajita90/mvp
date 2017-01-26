class Login extends React.Component{
	constructor(props){
		super(props)
	}
	post(login){
		console.log(login);
    	var self = this;
    	$.post('/login', {username:login.username, password:login.password})

    	.done(function(data){
    		if(data) {
    			ReactRouter.browserHistory.push('/')
    		}
    	})
    	.fail(({responseJSON}) => {
	    responseJSON.error.errors.forEach((err) =>
	      console.error(err)
	    );
	  });
    }
   // onSubmit={(e) => this.onCommentSubmit(e)}
   _handleKeyPress(target) {
    	if (target.charCode === 13) {
        	console.log('do validate');
   			//alert('Enter clicked!!!'); 
    	}
  	}

	render(){
		return(
		<div>
		<h2> SignIn </h2><br></br>
		<div>
		<label for="username">Username:</label>&nbsp;&nbsp;
	    <input id = 'username' type = 'text' placeholder = "Enter username"></input><br></br><br></br>
		<label for="password">Password:</label>&nbsp;&nbsp;
		<input id = 'password' type = 'password' placeholder = "Enter password"></input><br></br>
		</div>
		<div>
		<button onClick={() => this.post({username:document.getElementById('username').value, password:document.getElementById('password').value})} onKeyPress={this._handleKeyPress}>login
		</button>&nbsp;&nbsp;
		
		<ReactRouter.Link to="/signup"><u>Sign Up</u></ReactRouter.Link>
		</div>
		</div>
		)
	}
}
window.Login = Login;