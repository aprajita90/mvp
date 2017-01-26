'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
	}

	_createClass(Login, [{
		key: 'post',
		value: function post(login) {
			console.log(login);
			var self = this;
			$.post('/login', { username: login.username, password: login.password }).done(function (data) {
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
		// onSubmit={(e) => this.onCommentSubmit(e)}

	}, {
		key: '_handleKeyPress',
		value: function _handleKeyPress(target) {
			if (target.charCode === 13) {
				console.log('do validate');
				//alert('Enter clicked!!!'); 
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					' SignIn '
				),
				React.createElement('br', null),
				React.createElement(
					'div',
					null,
					React.createElement(
						'label',
						{ 'for': 'username' },
						'Username:'
					),
					'\xA0\xA0',
					React.createElement('input', { id: 'username', type: 'text', placeholder: 'Enter username' }),
					React.createElement('br', null),
					React.createElement('br', null),
					React.createElement(
						'label',
						{ 'for': 'password' },
						'Password:'
					),
					'\xA0\xA0',
					React.createElement('input', { id: 'password', type: 'password', placeholder: 'Enter password' }),
					React.createElement('br', null)
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'button',
						{ onClick: function onClick() {
								return _this2.post({ username: document.getElementById('username').value, password: document.getElementById('password').value });
							}, onKeyPress: this._handleKeyPress },
						'login'
					),
					'\xA0\xA0',
					React.createElement(
						ReactRouter.Link,
						{ to: '/signup' },
						React.createElement(
							'u',
							null,
							'Sign Up'
						)
					)
				)
			);
		}
	}]);

	return Login;
}(React.Component);

window.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwic2VsZiIsIiQiLCJwb3N0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRvbmUiLCJkYXRhIiwiUmVhY3RSb3V0ZXIiLCJicm93c2VySGlzdG9yeSIsInB1c2giLCJmYWlsIiwicmVzcG9uc2VKU09OIiwiZXJyb3IiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZXJyIiwidGFyZ2V0IiwiY2hhckNvZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJfaGFuZGxlS2V5UHJlc3MiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDTCxnQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHVHQUNYQSxLQURXO0FBRWpCOzs7O3VCQUNJQyxLLEVBQU07QUFDVkMsV0FBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0csT0FBSUcsT0FBTyxJQUFYO0FBQ0FDLEtBQUVDLElBQUYsQ0FBTyxRQUFQLEVBQWlCLEVBQUNDLFVBQVNOLE1BQU1NLFFBQWhCLEVBQTBCQyxVQUFTUCxNQUFNTyxRQUF6QyxFQUFqQixFQUVDQyxJQUZELENBRU0sVUFBU0MsSUFBVCxFQUFjO0FBQ25CLFFBQUdBLElBQUgsRUFBUztBQUNSQyxpQkFBWUMsY0FBWixDQUEyQkMsSUFBM0IsQ0FBZ0MsR0FBaEM7QUFDQTtBQUNELElBTkQsRUFPQ0MsSUFQRCxDQU9NLGdCQUFvQjtBQUFBLFFBQWxCQyxZQUFrQixRQUFsQkEsWUFBa0I7O0FBQzFCQSxpQkFBYUMsS0FBYixDQUFtQkMsTUFBbkIsQ0FBMEJDLE9BQTFCLENBQWtDLFVBQUNDLEdBQUQ7QUFBQSxZQUNoQ2pCLFFBQVFjLEtBQVIsQ0FBY0csR0FBZCxDQURnQztBQUFBLEtBQWxDO0FBR0QsSUFYQztBQVlBO0FBQ0Y7Ozs7a0NBQ2dCQyxNLEVBQVE7QUFDdEIsT0FBSUEsT0FBT0MsUUFBUCxLQUFvQixFQUF4QixFQUE0QjtBQUN4Qm5CLFlBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0g7QUFDQTtBQUNGOzs7MkJBRUs7QUFBQTs7QUFDUCxVQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEQTtBQUNpQixtQ0FEakI7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsUUFBTyxPQUFJLFVBQVg7QUFBQTtBQUFBLE1BREE7QUFBQTtBQUVHLG9DQUFPLElBQUssVUFBWixFQUF1QixNQUFPLE1BQTlCLEVBQXFDLGFBQWMsZ0JBQW5ELEdBRkg7QUFFK0Usb0NBRi9FO0FBRXdGLG9DQUZ4RjtBQUdBO0FBQUE7QUFBQSxRQUFPLE9BQUksVUFBWDtBQUFBO0FBQUEsTUFIQTtBQUFBO0FBSUEsb0NBQU8sSUFBSyxVQUFaLEVBQXVCLE1BQU8sVUFBOUIsRUFBeUMsYUFBYyxnQkFBdkQsR0FKQTtBQUlnRjtBQUpoRixLQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFFBQVEsU0FBUztBQUFBLGVBQU0sT0FBS0csSUFBTCxDQUFVLEVBQUNDLFVBQVNlLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLEtBQTlDLEVBQXFEaEIsVUFBU2MsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBbEcsRUFBVixDQUFOO0FBQUEsUUFBakIsRUFBNEksWUFBWSxLQUFLQyxlQUE3SjtBQUFBO0FBQUEsTUFEQTtBQUFBO0FBSUE7QUFBQyxpQkFBRCxDQUFhLElBQWI7QUFBQSxRQUFrQixJQUFHLFNBQXJCO0FBQStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0I7QUFKQTtBQVJBLElBREE7QUFpQkE7Ozs7RUE5Q2tCQyxNQUFNQyxTOztBQWdEMUJDLE9BQU83QixLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHBvc3QobG9naW4pe1xuXHRcdGNvbnNvbGUubG9nKGxvZ2luKTtcbiAgICBcdHZhciBzZWxmID0gdGhpcztcbiAgICBcdCQucG9zdCgnL2xvZ2luJywge3VzZXJuYW1lOmxvZ2luLnVzZXJuYW1lLCBwYXNzd29yZDpsb2dpbi5wYXNzd29yZH0pXG5cbiAgICBcdC5kb25lKGZ1bmN0aW9uKGRhdGEpe1xuICAgIFx0XHRpZihkYXRhKSB7XG4gICAgXHRcdFx0UmVhY3RSb3V0ZXIuYnJvd3Nlckhpc3RvcnkucHVzaCgnLycpXG4gICAgXHRcdH1cbiAgICBcdH0pXG4gICAgXHQuZmFpbCgoe3Jlc3BvbnNlSlNPTn0pID0+IHtcblx0ICAgIHJlc3BvbnNlSlNPTi5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyKSA9PlxuXHQgICAgICBjb25zb2xlLmVycm9yKGVycilcblx0ICAgICk7XG5cdCAgfSk7XG4gICAgfVxuICAgLy8gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLm9uQ29tbWVudFN1Ym1pdChlKX1cbiAgIF9oYW5kbGVLZXlQcmVzcyh0YXJnZXQpIHtcbiAgICBcdGlmICh0YXJnZXQuY2hhckNvZGUgPT09IDEzKSB7XG4gICAgICAgIFx0Y29uc29sZS5sb2coJ2RvIHZhbGlkYXRlJyk7XG4gICBcdFx0XHQvL2FsZXJ0KCdFbnRlciBjbGlja2VkISEhJyk7IFxuICAgIFx0fVxuICBcdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0PGRpdj5cblx0XHQ8aDI+IFNpZ25JbiA8L2gyPjxicj48L2JyPlxuXHRcdDxkaXY+XG5cdFx0PGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD4mbmJzcDsmbmJzcDtcblx0ICAgIDxpbnB1dCBpZCA9ICd1c2VybmFtZScgdHlwZSA9ICd0ZXh0JyBwbGFjZWhvbGRlciA9IFwiRW50ZXIgdXNlcm5hbWVcIj48L2lucHV0Pjxicj48L2JyPjxicj48L2JyPlxuXHRcdDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+Jm5ic3A7Jm5ic3A7XG5cdFx0PGlucHV0IGlkID0gJ3Bhc3N3b3JkJyB0eXBlID0gJ3Bhc3N3b3JkJyBwbGFjZWhvbGRlciA9IFwiRW50ZXIgcGFzc3dvcmRcIj48L2lucHV0Pjxicj48L2JyPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXY+XG5cdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBvc3Qoe3VzZXJuYW1lOmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpLnZhbHVlLCBwYXNzd29yZDpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS52YWx1ZX0pfSBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVLZXlQcmVzc30+bG9naW5cblx0XHQ8L2J1dHRvbj4mbmJzcDsmbmJzcDtcblx0XHRcblx0XHQ8UmVhY3RSb3V0ZXIuTGluayB0bz1cIi9zaWdudXBcIj48dT5TaWduIFVwPC91PjwvUmVhY3RSb3V0ZXIuTGluaz5cblx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cbndpbmRvdy5Mb2dpbiA9IExvZ2luOyJdfQ==