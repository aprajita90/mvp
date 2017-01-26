"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_ReactComponent) {
	_inherits(App, _ReactComponent);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			message: _this.this.props.message,
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
			console.log(message.message.value);
			$.post('/blog', { message: message.message.value, title: message.Title.value }) //request to sever

			.done(function (data) {
				//responce give to sever
				// 		console.log(data)
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
			this.setState({
				selectedBlog: blog
			});
		}
	}, {
		key: "newBlog",
		value: function newBlog() {
			this.setState({
				selectedBlog: {}
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"span",
					null,
					React.createElement(
						"div",
						null,
						"Title:",
						React.createElement("input", { type: "", name: "Title", id: "Title", value: this.state.selectedBlog.title }),
						"Blog:",
						React.createElement("textarea", { rows: "4", cols: "50", id: "Blog", value: this.state.selectedBlog.message }),
						React.createElement(
							"button",
							{ onClick: function onClick() {
									return _this2.post({ message: document.getElementById('Blog'), Title: document.getElementById('Title') });
								} },
							"Save Blog"
						),
						React.createElement(
							"button",
							{ onClick: function onClick() {
									return _this2.newBlog();
								} },
							"New Blog"
						),
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
}(ReactComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbmV0cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtZXNzYWdlIiwidGhpcyIsInNlbGVjdGVkQmxvZyIsIm90aGVybWVzc2FnZSIsInNlbGYiLCJjYWxsQmFjayIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJjYWxsQmFjazEiLCJnZXRCbG9nIiwiZ2V0T3RoZXJCbG9nIiwiYXV0aGVudGljYXRlIiwiJCIsImdldCIsImRvbmUiLCJyZWZyZXNoIiwicm91dGVyIiwicHVzaCIsImZhaWwiLCJ1cmwiLCJ0aGVuIiwidmFsdWUiLCJwb3N0IiwidGl0bGUiLCJUaXRsZSIsImVyciIsImdvIiwiYmxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdCbG9nIiwibG9nb3V0Iiwic2VsZWN0QmxvZyIsImJpbmQiLCJSZWFjdENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsd0dBQ1hBLEtBRFc7O0FBRWpCLFFBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFTLE1BQUtDLElBQUwsQ0FBVUgsS0FBVixDQUFnQkUsT0FEZDtBQUVYRSxpQkFBYSxFQUZGO0FBR1hDLGlCQUFjO0FBSEgsR0FBYjtBQUZpQjtBQU9qQjs7Ozs0QkFDUTtBQUNSLE9BQUlDLE9BQU8sSUFBWDtBQUNBLE9BQUlDLFdBQVcsU0FBWEEsUUFBVyxDQUFTQyxJQUFULEVBQWM7QUFDNUJDLFlBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXVCRixJQUF2QjtBQUNBRixTQUFLSyxRQUFMLENBQWM7QUFDWlQsY0FBVU07QUFERSxLQUFkO0FBR0EsSUFMRDtBQU1BLE9BQUlJLFlBQVksU0FBWkEsU0FBWSxDQUFTSixJQUFULEVBQWM7QUFDN0JDLFlBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXVCRixJQUF2QjtBQUNBRixTQUFLSyxR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LENBQXdCLE9BQXhCLENBQS9DLEVBQVYsQ0FBTjtBQUFBLFNBQWpCO0FBQUE7QUFBQSxPQUhBO0FBS1U7QUFBQTtBQUFBLFNBQVEsU0FBUztBQUFBLGdCQUFNLE9BQUtDLE9BQUwsRUFBTjtBQUFBLFNBQWpCO0FBQUE7QUFBQSxPQUxWO0FBT1U7QUFBQTtBQUFBLFNBQVEsU0FBUztBQUFBLGdCQUFNLE9BQUtDLE1BQUwsRUFBTjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQVBWO0FBREEsS0FEQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEQTtBQUVBLDBCQUFDLFdBQUQsSUFBYSxVQUFVLEtBQUtsQyxLQUFMLENBQVdDLE9BQWxDLEVBQTJDLFlBQWMsS0FBS2tDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQXpEO0FBRkEsTUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEQTtBQUVBLDBCQUFDLFdBQUQsSUFBYSxVQUFVLEtBQUtwQyxLQUFMLENBQVdJLFlBQWxDLEVBQWdELFlBQWMsS0FBSytCLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQTlEO0FBRkE7QUFMQTtBQWJBLElBREE7QUEwQkE7Ozs7RUEzSGdCQyxjIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0Q29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHQgIG1lc3NhZ2U6IHRoaXMudGhpcy5wcm9wcy5tZXNzYWdlLFxuXHRcdCAgc2VsZWN0ZWRCbG9nOnt9LFxuXHRcdCAgb3RoZXJtZXNzYWdlOiAnJ1xuXHRcdH1cblx0fVxuXHRyZWZyZXNoKCl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHZhciBjYWxsQmFjayA9IGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0Y29uc29sZS5sb2coXCJBbGwgZGF0YVwiLGRhdGEpO1xuXHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdCAgXHRcdG1lc3NhZ2UgOiBkYXRhXG5cdCAgXHR9KVx0XG5cdFx0fVxuXHRcdHZhciBjYWxsQmFjazEgPSBmdW5jdGlvbihkYXRhKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiQWxsIGRhdGFcIixkYXRhKTtcblx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHQgIFx0XHRvdGhlcm1lc3NhZ2UgOiBkYXRhXG5cdCAgXHR9KVxuXHRcdH1cblx0XHR0aGlzLmdldEJsb2coJy9ibG9nJywgY2FsbEJhY2spO1xuXHRcdHRoaXMuZ2V0T3RoZXJCbG9nKCcvbWVzc2FnZScsIGNhbGxCYWNrMSk7XG5cblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJkYXRhOlwiLCB0aGlzLnN0YXRlLm1lc3NhZ2UpO1xuXHRcdHRoaXMuYXV0aGVudGljYXRlKCk7XG5cdFx0XG4gICAgfVxuICAgIGF1dGhlbnRpY2F0ZSgpIHtcbiAgICBcdHZhciBzZWxmID0gdGhpcztcbiAgICBcdCQuZ2V0KCcvYXV0aGVudGljYXRlJywgey8vZ2V0IHJldHVybiBwcm9taXNlXG4gICAgXG4gIFx0XHR9KVxuXHQgIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcblx0ICBcdGlmKGRhdGEpIHtcblx0ICBcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0ICBcdFx0c2VsZi5yZWZyZXNoKCk7XG5cdCAgXHR9IGVsc2Uge1xuXHQgIFx0XHRzZWxmLnByb3BzLnJvdXRlci5wdXNoKCcvbG9naW4nKTtcblx0ICBcdH1cblx0ICB9KVxuXHQgIC5mYWlsKGZ1bmN0aW9uKCl7fSk7XG4gICAgfVxuICAgIGdldEJsb2codXJsLCBjYWxsQmFjayl7XG4gICAgXHQkLmdldCh1cmwpXG4gICAgXHQudGhlbihjYWxsQmFjaylcbiAgICBcdC5mYWlsKGZ1bmN0aW9uKCl7fSk7XG4gICAgfVxuXG5cbiAgICBnZXRPdGhlckJsb2codXJsLCBjYWxsQmFjayl7XG4gICAgXHQkLmdldCh1cmwpXG4gICAgXHQudGhlbihjYWxsQmFjaylcbiAgICBcdC5mYWlsKGZ1bmN0aW9uKCl7fSk7XG4gICAgfVxuXHRwb3N0KG1lc3NhZ2Upe1xuICAgIFx0dmFyIHNlbGYgPSB0aGlzO1xuICAgIFx0Y29uc29sZS5sb2cobWVzc2FnZS5tZXNzYWdlLnZhbHVlKTtcbiAgICBcdCQucG9zdCgnL2Jsb2cnLCB7bWVzc2FnZSA6IG1lc3NhZ2UubWVzc2FnZS52YWx1ZSwgdGl0bGUgOiBtZXNzYWdlLlRpdGxlLnZhbHVlfSkvL3JlcXVlc3QgdG8gc2V2ZXJcblxuICAgIFx0LmRvbmUoZnVuY3Rpb24oZGF0YSl7Ly9yZXNwb25jZSBnaXZlIHRvIHNldmVyXG4gICAgLy8gXHRcdGNvbnNvbGUubG9nKGRhdGEpXG4gICAgLy8gXHRcdHNlbGYuc2V0U3RhdGUoe1xuXHQgIFx0Ly8gXHRtZXNzYWdlIDogZGF0YS5tZXNzYWdlXG5cdCAgXHQvLyB9KTtcbiAgICBcdFx0c2VsZi5yZWZyZXNoKCk7XG4gICAgXHR9KVxuICAgIFx0LmZhaWwoZnVuY3Rpb24oZXJyKSB7Ly93aGVuIHNldmVyIGdpdmUgZXJyb3JzXG4gICAgXHRcdGNvbnNvbGUubG9nKGVycilcbiAgICBcdH0pO1xuICAgIH1cbiAgICBsb2dvdXQoKXtcbiAgICBcdHZhciBzZWxmID0gdGhpcztcbiAgICBcdCQuZ2V0KCcvbG9nb3V0JylcbiAgICBcdC5kb25lKGZ1bmN0aW9uKCl7XG4gICAgXHRcdHNlbGYucHJvcHMucm91dGVyLmdvKCcvJylcbiAgICBcdH0pXG4gICAgfVxuXG5cdHNlbGVjdEJsb2coYmxvZyl7XG4gICAgXHR0aGlzLnNldFN0YXRlKHtcbiAgICBcdFx0c2VsZWN0ZWRCbG9nOiBibG9nIFxuXHQgIFx0fSlcdFxuICAgIH1cbiAgICBuZXdCbG9nKCl7XG4gICAgXHR0aGlzLnNldFN0YXRlKHtcbiAgICBcdFx0c2VsZWN0ZWRCbG9nOiB7fSBcbiAgICBcdH0pXG5cbiAgICB9XG4gICAgXG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdDxkaXY+XG5cdFx0PHNwYW4+XG5cdFx0PGRpdj5cblx0XHRUaXRsZTo8aW5wdXQgdHlwZSA9ICcnIG5hbWUgPSAnVGl0bGUnIGlkID0gJ1RpdGxlJyB2YWx1ZSA9IHt0aGlzLnN0YXRlLnNlbGVjdGVkQmxvZy50aXRsZX0+PC9pbnB1dD5cblx0XHRCbG9nOjx0ZXh0YXJlYSByb3dzPVwiNFwiIGNvbHM9XCI1MFwiIGlkID0nQmxvZycgdmFsdWUgPSB7dGhpcy5zdGF0ZS5zZWxlY3RlZEJsb2cubWVzc2FnZX0+PC90ZXh0YXJlYT5cblx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucG9zdCh7bWVzc2FnZTpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQmxvZycpLFRpdGxlOmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdUaXRsZScpfSl9PlNhdmUgQmxvZ1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubmV3QmxvZygpfT5OZXcgQmxvZ1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubG9nb3V0KCl9PmxvZ291dFxuICAgICAgICAgICAgPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdDxkaXY+XG5cdFx0PGgyPk15IEJsb2cgTGlzdDwvaDI+XG5cdFx0PE1lc3NhZ2VMaXN0IG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IHNlbGVjdEJsb2cgPSB7dGhpcy5zZWxlY3RCbG9nLmJpbmQodGhpcyl9Lz5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2PlxuXHRcdDxoMj5PdGhlciBCbG9nIExpc3Q8L2gyPlxuXHRcdDxNZXNzYWdlTGlzdCBtZXNzYWdlcz17dGhpcy5zdGF0ZS5vdGhlcm1lc3NhZ2V9IHNlbGVjdEJsb2cgPSB7dGhpcy5zZWxlY3RCbG9nLmJpbmQodGhpcyl9Lz5cblx0XHQ8L2Rpdj5cblx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59Il19