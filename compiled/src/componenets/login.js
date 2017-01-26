'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_ReactComponent) {
	_inherits(Login, _ReactComponent);

	function Login(props) {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
	}

	_createClass(Login, [{
		key: 'post',
		value: function post(login) {
			var self = this;
			console.log(login.login);
			$.post('/login', { username: login.login.value, password: login.password.value }).done(function (data) {
				if (data) {
					ReactRouter.browserHistory.push('/');
				}
			}).fail(function (_ref) {
				var responseJSON = _ref.responseJSON;

				responseJSON.error.errors.forEach(function (err) {
					return console.error(err);
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(
						'label',
						{ 'for': 'username' },
						'Username:'
					),
					React.createElement('input', { id: 'usernamr', type: 'text', placeholder: 'Enter username' }),
					React.createElement(
						'label',
						{ 'for': 'password' },
						'Password:'
					),
					React.createElement('input', { id: 'password', type: 'password', placeholder: 'Enter password' })
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'button',
						{ onClick: function onClick() {
								return _this2.post({ login: document.getElementById('username'), password: document.getElementById('password') });
							} },
						'login'
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						ReactRouter.Link,
						{ to: '/signup' },
						'Sign Up'
					)
				)
			);
		}
	}]);

	return Login;
}(ReactComponent);

window.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbmV0cy9sb2dpbi5qc3giXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsImxvZ2luIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCIkIiwicG9zdCIsInVzZXJuYW1lIiwidmFsdWUiLCJwYXNzd29yZCIsImRvbmUiLCJkYXRhIiwiUmVhY3RSb3V0ZXIiLCJicm93c2VySGlzdG9yeSIsInB1c2giLCJmYWlsIiwicmVzcG9uc2VKU09OIiwiZXJyb3IiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZXJyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0Q29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNMLGdCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsdUdBQ1hBLEtBRFc7QUFFakI7Ozs7dUJBQ0lDLEssRUFBTTtBQUNQLE9BQUlDLE9BQU8sSUFBWDtBQUNBQyxXQUFRQyxHQUFSLENBQVlILE1BQU1BLEtBQWxCO0FBQ0FJLEtBQUVDLElBQUYsQ0FBTyxRQUFQLEVBQWlCLEVBQUNDLFVBQVNOLE1BQU1BLEtBQU4sQ0FBWU8sS0FBdEIsRUFBNkJDLFVBQVNSLE1BQU1RLFFBQU4sQ0FBZUQsS0FBckQsRUFBakIsRUFFQ0UsSUFGRCxDQUVNLFVBQVNDLElBQVQsRUFBYztBQUNuQixRQUFHQSxJQUFILEVBQVM7QUFDUkMsaUJBQVlDLGNBQVosQ0FBMkJDLElBQTNCLENBQWdDLEdBQWhDO0FBQ0E7QUFDRCxJQU5ELEVBT0NDLElBUEQsQ0FPTSxnQkFBb0I7QUFBQSxRQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCOztBQUMxQkEsaUJBQWFDLEtBQWIsQ0FBbUJDLE1BQW5CLENBQTBCQyxPQUExQixDQUFrQyxVQUFDQyxHQUFEO0FBQUEsWUFDaENqQixRQUFRYyxLQUFSLENBQWNHLEdBQWQsQ0FEZ0M7QUFBQSxLQUFsQztBQUdELElBWEM7QUFZQTs7OzJCQUVJO0FBQUE7O0FBQ1A7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFFBQU8sT0FBSSxVQUFYO0FBQUE7QUFBQSxNQURBO0FBRUcsb0NBQU8sSUFBSyxVQUFaLEVBQXVCLE1BQU8sTUFBOUIsRUFBcUMsYUFBYyxnQkFBbkQsR0FGSDtBQUdBO0FBQUE7QUFBQSxRQUFPLE9BQUksVUFBWDtBQUFBO0FBQUEsTUFIQTtBQUlBLG9DQUFPLElBQUssVUFBWixFQUF1QixNQUFPLFVBQTlCLEVBQXlDLGFBQWMsZ0JBQXZEO0FBSkEsS0FEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxRQUFRLFNBQVM7QUFBQSxlQUFNLE9BQUtkLElBQUwsQ0FBVSxFQUFDTCxPQUFNb0IsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUFQLEVBQTRDYixVQUFTWSxTQUFTQyxjQUFULENBQXdCLFVBQXhCLENBQXJELEVBQVYsQ0FBTjtBQUFBLFFBQWpCO0FBQUE7QUFBQTtBQURBLEtBUEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFDLGlCQUFELENBQWEsSUFBYjtBQUFBLFFBQWtCLElBQUcsU0FBckI7QUFBQTtBQUFBO0FBREE7QUFWQTtBQWNBOzs7O0VBcENrQkMsYzs7QUFzQ3BCQyxPQUFPekIsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdENvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHBvc3QobG9naW4pe1xuICAgIFx0dmFyIHNlbGYgPSB0aGlzO1xuICAgIFx0Y29uc29sZS5sb2cobG9naW4ubG9naW4pO1xuICAgIFx0JC5wb3N0KCcvbG9naW4nLCB7dXNlcm5hbWU6bG9naW4ubG9naW4udmFsdWUsIHBhc3N3b3JkOmxvZ2luLnBhc3N3b3JkLnZhbHVlfSlcblxuICAgIFx0LmRvbmUoZnVuY3Rpb24oZGF0YSl7XG4gICAgXHRcdGlmKGRhdGEpIHtcbiAgICBcdFx0XHRSZWFjdFJvdXRlci5icm93c2VySGlzdG9yeS5wdXNoKCcvJylcbiAgICBcdFx0fVxuICAgIFx0fSlcbiAgICBcdC5mYWlsKCh7cmVzcG9uc2VKU09OfSkgPT4ge1xuXHQgICAgcmVzcG9uc2VKU09OLmVycm9yLmVycm9ycy5mb3JFYWNoKChlcnIpID0+XG5cdCAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuXHQgICAgKTtcblx0ICB9KTtcbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cdFx0PGRpdj5cblx0XHQ8ZGl2PlxuXHRcdDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lOjwvbGFiZWw+XG5cdCAgICA8aW5wdXQgaWQgPSAndXNlcm5hbXInIHR5cGUgPSAndGV4dCcgcGxhY2Vob2xkZXIgPSBcIkVudGVyIHVzZXJuYW1lXCI+PC9pbnB1dD5cblx0XHQ8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuXHRcdDxpbnB1dCBpZCA9ICdwYXNzd29yZCcgdHlwZSA9ICdwYXNzd29yZCcgcGxhY2Vob2xkZXIgPSBcIkVudGVyIHBhc3N3b3JkXCI+PC9pbnB1dD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2PlxuXHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wb3N0KHtsb2dpbjpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKSwgcGFzc3dvcmQ6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyl9KX0+bG9naW48L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2PlxuXHRcdDxSZWFjdFJvdXRlci5MaW5rIHRvPVwiL3NpZ251cFwiPlNpZ24gVXA8L1JlYWN0Um91dGVyLkxpbms+XG5cdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdH1cbn1cbndpbmRvdy5Mb2dpbiA9IExvZ2luOyJdfQ==