"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { AppRegistry, StyleSheet, Text, View } from 'react-native';


var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			message: _this.props.message,
			selectedBlog: {},
			othermessage: ''
		};
		return _this;
	}

	_createClass(App, [{
		key: "refresh",
		value: function refresh() {
			var self = this;
			var callBack = function callBack(data) {
				console.log("All data", data);
				self.setState({
					message: data
				});
			};
			var callBack1 = function callBack1(data) {
				console.log("All data", data);
				self.setState({
					othermessage: data
				});
			};
			this.getBlog('/blog', callBack);
			this.getOtherBlog('/message', callBack1);
		}
	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			console.log("data:", this.state.message);
			this.authenticate();
		}
	}, {
		key: "authenticate",
		value: function authenticate() {
			var self = this;
			$.get('/authenticate', {//get return promise

			}).done(function (data) {
				if (data) {
					console.log(data);
					self.refresh();
				} else {
					self.props.router.push('/login');
				}
			}).fail(function () {});
		}
	}, {
		key: "getBlog",
		value: function getBlog(url, callBack) {
			$.get(url).then(callBack).fail(function () {});
		}
	}, {
		key: "getOtherBlog",
		value: function getOtherBlog(url, callBack) {
			$.get(url).then(callBack).fail(function () {});
		}
	}, {
		key: "post",
		value: function post(message) {
			var self = this;
			$.post('/blog', { message: message.message, title: message.Title }) //request to sever

			.done(function (data) {
				//responce give to client from server
				console.log(data);
				// 		self.setState({
				// 	message : data.message
				// });
				self.refresh();
			}).fail(function (err) {
				//when sever give errors
				console.log(err);
			});
		}
	}, {
		key: "logout",
		value: function logout() {
			var self = this;
			$.get('/logout').done(function () {
				self.props.router.go('/');
			});
		}
	}, {
		key: "selectBlog",
		value: function selectBlog(blog) {
			console.log(blog);
			this.setState({
				selectedBlog: blog
			});
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


	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					" User Blog "
				),
				React.createElement(
					"span",
					null,
					React.createElement(
						"div",
						null,
						React.createElement(
							"label",
							{ "for": "Title" },
							"Title"
						),
						React.createElement("br", null),
						React.createElement("input", { type: "", name: "Title", id: "Title", value: this.state.selectedBlog.title }),
						React.createElement("br", null),
						React.createElement("br", null),
						React.createElement(
							"label",
							{ "for": "Blog" },
							"Blog"
						),
						React.createElement("br", null),
						React.createElement("textarea", { rows: "4", cols: "50", id: "Blog", value: this.state.selectedBlog.message }),
						React.createElement("br", null),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ onClick: function onClick() {
									return _this2.post({ message: document.getElementById('Blog').value, Title: document.getElementById('Title').value });
								} },
							"Save Blog"
						),
						"\xA0\xA0",
						React.createElement(
							"button",
							{ onClick: function onClick() {
									return _this2.logout();
								} },
							"logout"
						)
					)
				),
				React.createElement(
					"span",
					null,
					React.createElement(
						"div",
						null,
						React.createElement(
							"h2",
							null,
							"My Blog List"
						),
						React.createElement(MessageList, { messages: this.state.message, selectBlog: this.selectBlog.bind(this) })
					),
					React.createElement(
						"div",
						null,
						React.createElement(
							"h2",
							null,
							"Other Blog List"
						),
						React.createElement(MessageList, { messages: this.state.othermessage, selectBlog: this.selectBlog.bind(this) })
					)
				)
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2UiLCJzZWxlY3RlZEJsb2ciLCJvdGhlcm1lc3NhZ2UiLCJzZWxmIiwiY2FsbEJhY2siLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2FsbEJhY2sxIiwiZ2V0QmxvZyIsImdldE90aGVyQmxvZyIsImF1dGhlbnRpY2F0ZSIsIiQiLCJnZXQiLCJkb25lIiwicmVmcmVzaCIsInJvdXRlciIsInB1c2giLCJmYWlsIiwidXJsIiwidGhlbiIsInBvc3QiLCJ0aXRsZSIsIlRpdGxlIiwiZXJyIiwiZ28iLCJibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibG9nb3V0Iiwic2VsZWN0QmxvZyIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHdHQUNYQSxLQURXOztBQUVqQixRQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBUyxNQUFLRixLQUFMLENBQVdFLE9BRFQ7QUFFWEMsaUJBQWEsRUFGRjtBQUdYQyxpQkFBYztBQUhILEdBQWI7QUFGaUI7QUFPakI7Ozs7NEJBQ1E7QUFDUixPQUFJQyxPQUFPLElBQVg7QUFDQSxPQUFJQyxXQUFXLFNBQVhBLFFBQVcsQ0FBU0MsSUFBVCxFQUFjO0FBQzVCQyxZQUFRQyxHQUFSLENBQVksVUFBWixFQUF1QkYsSUFBdkI7QUFDQUYsU0FBS0ssUUFBTCxDQUFjO0FBQ1pSLGNBQVVLO0FBREUsS0FBZDtBQUdBLElBTEQ7QUFNQSxPQUFJSSxZQUFZLFNBQVpBLFNBQVksQ0FBU0osSUFBVCxFQUFjO0FBQzdCQyxZQUFRQyxHQUFSLENBQVksVUFBWixFQUF1QkYsSUFBdkI7QUFDQUYsU0FBS0ssUUFBTCxDQUFjO0FBQ1pOLG1CQUFl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STZGLHFDQUo3RjtBQUlzRyxxQ0FKdEc7QUFLQTtBQUFBO0FBQUEsU0FBUSxTQUFTO0FBQUEsZ0JBQU0sT0FBS3NCLElBQUwsQ0FBVSxFQUFDdEIsU0FBUTRCLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQXpDLEVBQWdETixPQUFNSSxTQUFTQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUF2RixFQUFWLENBQU47QUFBQSxTQUFqQjtBQUFBO0FBQUEsT0FMQTtBQUFBO0FBT007QUFBQTtBQUFBLFNBQVEsU0FBUztBQUFBLGdCQUFNLE9BQUtDLE1BQUwsRUFBTjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQVBOO0FBREEsS0FGQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEQTtBQUVBLDBCQUFDLFdBQUQsSUFBYSxVQUFVLEtBQUtoQyxLQUFMLENBQVdDLE9BQWxDLEVBQTJDLFlBQWMsS0FBS2dDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQXpEO0FBRkEsTUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEQTtBQUVBLDBCQUFDLFdBQUQsSUFBYSxVQUFVLEtBQUtsQyxLQUFMLENBQVdHLFlBQWxDLEVBQWdELFlBQWMsS0FBSzhCLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQTlEO0FBRkE7QUFMQTtBQWJBLElBREE7QUEwQkE7Ozs7RUEvSGdCQyxNQUFNQyxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEFwcFJlZ2lzdHJ5LCBTdHlsZVNoZWV0LCBUZXh0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdCAgbWVzc2FnZTogdGhpcy5wcm9wcy5tZXNzYWdlLFxuXHRcdCAgc2VsZWN0ZWRCbG9nOnt9LFxuXHRcdCAgb3RoZXJtZXNzYWdlOiAnJ1xuXHRcdH1cblx0fVxuXHRyZWZyZXNoKCl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHZhciBjYWxsQmFjayA9IGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0Y29uc29sZS5sb2coXCJBbGwgZGF0YVwiLGRhdGEpO1xuXHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdCAgXHRcdG1lc3NhZ2UgOiBkYXRhXG5cdCAgXHR9KVx0XG5cdFx0fVxuXHRcdHZhciBjYWxsQmFjazEgPSBmdW5jdGlvbihkYXRhKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiQWxsIGRhdGFcIixkYXRhKTtcblx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHQgIFx0XHRvdGhlcm1lc3NhZ2UgOiBkYXRhXG5cdCAgXHR9KVxuXHRcdH1cblx0XHR0aGlzLmdldEJsb2coJy9ibG9nJywgY2FsbEJhY2spO1xuXHRcdHRoaXMuZ2V0T3RoZXJCbG9nKCcvbWVzc2FnZScsIGNhbGxCYWNrMSk7XG5cblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJkYXRhOlwiLCB0aGlzLnN0YXRlLm1lc3NhZ2UpO1xuXHRcdHRoaXMuYXV0aGVudGljYXRlKCk7XG5cdFx0XG4gICAgfVxuICAgIGF1dGhlbnRpY2F0ZSgpIHtcbiAgICBcdHZhciBzZWxmID0gdGhpcztcbiAgICBcdCQuZ2V0KCcvYXV0aGVudGljYXRlJywgey8vZ2V0IHJldHVybiBwcm9taXNlXG4gICAgXG4gIFx0XHR9KVxuXHQgIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcblx0ICBcdGlmKGRhdGEpIHtcblx0ICBcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0ICBcdFx0c2VsZi5yZWZyZXNoKCk7XG5cdCAgXHR9IGVsc2Uge1xuXHQgIFx0XHRzZWxmLnByb3BzLnJvdXRlci5wdXNoKCcvbG9naW4nKTtcblx0ICBcdH1cblx0ICB9KVxuXHQgIC5mYWlsKGZ1bmN0aW9uKCl7fSk7XG4gICAgfVxuICAgIGdldEJsb2codXJsLCBjYWxsQmFjayl7XG4gICAgXHQkLmdldCh1cmwpXG4gICAgXHQudGhlbihjYWxsQmFjaylcbiAgICBcdC5mYWlsKGZ1bmN0aW9uKCl7fSk7XG4gICAgfVxuXG5cbiAgICBnZXRPdGhlckJsb2codXJsLCBjYWxsQmFjayl7XG4gICAgXHQkLmdldCh1cmwpXG4gICAgXHQudGhlbihjYWxsQmFjaylcbiAgICBcdC5mYWlsKGZ1bmN0aW9uKCl7fSk7XG4gICAgfVxuXHRwb3N0KG1lc3NhZ2Upe1xuICAgIFx0dmFyIHNlbGYgPSB0aGlzO1xuICAgIFx0JC5wb3N0KCcvYmxvZycsIHttZXNzYWdlIDogbWVzc2FnZS5tZXNzYWdlLCB0aXRsZSA6IG1lc3NhZ2UuVGl0bGV9KS8vcmVxdWVzdCB0byBzZXZlclxuXG4gICAgXHQuZG9uZShmdW5jdGlvbihkYXRhKXsvL3Jlc3BvbmNlIGdpdmUgdG8gY2xpZW50IGZyb20gc2VydmVyXG4gICAgXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIFx0XHRzZWxmLnNldFN0YXRlKHtcblx0ICBcdC8vIFx0bWVzc2FnZSA6IGRhdGEubWVzc2FnZVxuXHQgIFx0Ly8gfSk7XG4gICAgXHRcdHNlbGYucmVmcmVzaCgpO1xuICAgIFx0fSlcbiAgICBcdC5mYWlsKGZ1bmN0aW9uKGVycikgey8vd2hlbiBzZXZlciBnaXZlIGVycm9yc1xuICAgIFx0XHRjb25zb2xlLmxvZyhlcnIpXG4gICAgXHR9KTtcbiAgICB9XG4gICAgbG9nb3V0KCl7XG4gICAgXHR2YXIgc2VsZiA9IHRoaXM7XG4gICAgXHQkLmdldCgnL2xvZ291dCcpXG4gICAgXHQuZG9uZShmdW5jdGlvbigpe1xuICAgIFx0XHRzZWxmLnByb3BzLnJvdXRlci5nbygnLycpXG4gICAgXHR9KVxuICAgIH1cblxuXHRzZWxlY3RCbG9nKGJsb2cpe1xuXHRcdGNvbnNvbGUubG9nKGJsb2cpXG4gICAgXHR0aGlzLnNldFN0YXRlKHtcbiAgICBcdFx0c2VsZWN0ZWRCbG9nOiBibG9nIFxuXHQgIFx0fSlcdFxuICAgIH1cbiAgICAvLyBuZXdCbG9nKCl7XG4gICAgLy8gXHR0aGlzLnNldFN0YXRlKHtcbiAgICAvLyBcdFx0c2VsZWN0ZWRCbG9nOiB7XG4gICAgLy8gXHRcdFx0dGl0bGU6ICcnLFxuICAgIC8vIFx0XHRcdG1lc3NhZ2U6JydcbiAgICAvLyBcdFx0fVxuICAgIC8vIFx0fSlcblxuICAgIC8vIH1cbiAgICAgLy88YnI+PC9icj48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubmV3QmxvZygpfT5OZXcgQmxvZzwvYnV0dG9uPlxuICAgIFxuICBcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdDxkaXY+XG5cdFx0PGgxPiBVc2VyIEJsb2cgPC9oMT5cblx0XHQ8c3Bhbj5cblx0XHQ8ZGl2PlxuXHRcdDxsYWJlbCBmb3I9XCJUaXRsZVwiPlRpdGxlPC9sYWJlbD48YnI+PC9icj5cblx0XHQ8aW5wdXQgdHlwZSA9ICcnIG5hbWUgPSAnVGl0bGUnIGlkID0gJ1RpdGxlJyB2YWx1ZSA9IHt0aGlzLnN0YXRlLnNlbGVjdGVkQmxvZy50aXRsZX0+PC9pbnB1dD48YnI+PC9icj48YnI+PC9icj5cblx0XHQ8bGFiZWwgZm9yPVwiQmxvZ1wiPkJsb2c8L2xhYmVsPjxicj48L2JyPlxuXHRcdDx0ZXh0YXJlYSByb3dzPVwiNFwiIGNvbHM9XCI1MFwiIGlkID0nQmxvZycgdmFsdWUgPSB7dGhpcy5zdGF0ZS5zZWxlY3RlZEJsb2cubWVzc2FnZX0+PC90ZXh0YXJlYT48YnI+PC9icj48YnI+PC9icj5cblx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucG9zdCh7bWVzc2FnZTpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQmxvZycpLnZhbHVlLCBUaXRsZTpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVGl0bGUnKS52YWx1ZX0pfSA+U2F2ZSBCbG9nPC9idXR0b24+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5sb2dvdXQoKX0+bG9nb3V0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdDxkaXY+XG5cdFx0PGgyPk15IEJsb2cgTGlzdDwvaDI+XG5cdFx0PE1lc3NhZ2VMaXN0IG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IHNlbGVjdEJsb2cgPSB7dGhpcy5zZWxlY3RCbG9nLmJpbmQodGhpcyl9Lz5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2PlxuXHRcdDxoMj5PdGhlciBCbG9nIExpc3Q8L2gyPlxuXHRcdDxNZXNzYWdlTGlzdCBtZXNzYWdlcz17dGhpcy5zdGF0ZS5vdGhlcm1lc3NhZ2V9IHNlbGVjdEJsb2cgPSB7dGhpcy5zZWxlY3RCbG9nLmJpbmQodGhpcyl9Lz5cblx0XHQ8L2Rpdj5cblx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59Il19