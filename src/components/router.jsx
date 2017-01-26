ReactDOM.render(
	<ReactRouter.Router history={ReactRouter.browserHistory}>
	<ReactRouter.Route path='/' component={App}></ReactRouter.Route>
	<ReactRouter.Route path='/login' component={Login}></ReactRouter.Route>
	<ReactRouter.Route path='/signup' component={Signup}></ReactRouter.Route>
	</ReactRouter.Router>, document.getElementById('app')
)
