'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
	_inherits(Signup, _React$Component);

	function Signup(props) {
		_classCallCheck(this, Signup);

		return _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));
	}

	_createClass(Signup, [{
		key: 'post',
		value: function post(signup) {
			console.log(signup);
			var self = this;

			//console.log(login.login);
			$.post('/signup', { username: signup.username, password: signup.password }) //(req)post to server from client

			.done(function (data) {
				//responce to client from server
				if (data) {
					self.props.router.push('/');
				} else {
					self.props.router.push('/login');
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

			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					' Signup '
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
				React.createElement('br', null),
				React.createElement(
					'div',
					null,
					React.createElement(
						'button',
						{ onClick: function onClick() {
								return _this2.post({ username: document.getElementById('username').value, password: document.getElementById('password').value });
							} },
						'signup'
					)
				)
			);
		}
	}]);

	return Signup;
}(React.Component);

window.Signup = Signup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZ251cC5qc3giXSwibmFtZXMiOlsiU2lnbnVwIiwicHJvcHMiLCJzaWdudXAiLCJjb25zb2xlIiwibG9nIiwic2VsZiIsIiQiLCJwb3N0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRvbmUiLCJkYXRhIiwicm91dGVyIiwicHVzaCIsImZhaWwiLCJyZXNwb25zZUpTT04iLCJlcnJvciIsImVycm9ycyIsImZvckVhY2giLCJlcnIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDTCxpQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHlHQUNYQSxLQURXO0FBRWpCOzs7O3VCQUNJQyxNLEVBQU87QUFDWEMsV0FBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0csT0FBSUcsT0FBTyxJQUFYOztBQUVBO0FBQ0FDLEtBQUVDLElBQUYsQ0FBTyxTQUFQLEVBQWtCLEVBQUNDLFVBQVVOLE9BQU9NLFFBQWxCLEVBQTRCQyxVQUFVUCxPQUFPTyxRQUE3QyxFQUFsQixFQUF5RTs7QUFBekUsSUFFQ0MsSUFGRCxDQUVNLFVBQVNDLElBQVQsRUFBYztBQUFFO0FBQ3JCLFFBQUdBLElBQUgsRUFBUztBQUNSTixVQUFLSixLQUFMLENBQVdXLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLEdBQXZCO0FBQ0EsS0FGRCxNQUVPO0FBQ05SLFVBQUtKLEtBQUwsQ0FBV1csTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsUUFBdkI7QUFDQTtBQUNELElBUkQsRUFTQ0MsSUFURCxDQVNNLGdCQUFvQjtBQUFBLFFBQWxCQyxZQUFrQixRQUFsQkEsWUFBa0I7O0FBQzFCQSxpQkFBYUMsS0FBYixDQUFtQkMsTUFBbkIsQ0FBMEJDLE9BQTFCLENBQWtDLFVBQUNDLEdBQUQ7QUFBQSxZQUNoQ2hCLFFBQVFhLEtBQVIsQ0FBY0csR0FBZCxDQURnQztBQUFBLEtBQWxDO0FBR0QsSUFiQztBQWNBOzs7MkJBQ0k7QUFBQTs7QUFDUCxVQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEQTtBQUNpQixtQ0FEakI7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsUUFBTyxPQUFJLFVBQVg7QUFBQTtBQUFBLE1BREE7QUFBQTtBQUVBLG9DQUFPLElBQUcsVUFBVixFQUFxQixNQUFPLE1BQTVCLEVBQW1DLGFBQWMsZ0JBQWpELEdBRkE7QUFFMEUsb0NBRjFFO0FBRW1GLG9DQUZuRjtBQUdBO0FBQUE7QUFBQSxRQUFPLE9BQUksVUFBWDtBQUFBO0FBQUEsTUFIQTtBQUFBO0FBSUEsb0NBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQU8sVUFBNUIsRUFBdUMsYUFBYyxnQkFBckQsR0FKQTtBQUk4RTtBQUo5RSxLQUZBO0FBT00sbUNBUE47QUFRQTtBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUEsUUFBUSxTQUFTO0FBQUEsZUFBTSxPQUFLWixJQUFMLENBQVUsRUFBQ0MsVUFBU1ksU0FBU0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBOUMsRUFBb0RiLFVBQVNXLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLEtBQWpHLEVBQVYsQ0FBTjtBQUFBLFFBQWpCO0FBQUE7QUFBQTtBQURIO0FBUkEsSUFEQTtBQWNBOzs7O0VBdkNtQkMsTUFBTUMsUzs7QUF5QzNCQyxPQUFPekIsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2lnbnVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cG9zdChzaWdudXApe1xuXHRcdGNvbnNvbGUubG9nKHNpZ251cCk7XG4gICAgXHR2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBcdC8vY29uc29sZS5sb2cobG9naW4ubG9naW4pO1xuICAgIFx0JC5wb3N0KCcvc2lnbnVwJywge3VzZXJuYW1lOiBzaWdudXAudXNlcm5hbWUsIHBhc3N3b3JkOiBzaWdudXAucGFzc3dvcmR9KS8vKHJlcSlwb3N0IHRvIHNlcnZlciBmcm9tIGNsaWVudFxuXG4gICAgXHQuZG9uZShmdW5jdGlvbihkYXRhKXsgLy9yZXNwb25jZSB0byBjbGllbnQgZnJvbSBzZXJ2ZXJcbiAgICBcdFx0aWYoZGF0YSkge1xuICAgIFx0XHRcdHNlbGYucHJvcHMucm91dGVyLnB1c2goJy8nKVxuICAgIFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdHNlbGYucHJvcHMucm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgXHRcdH1cbiAgICBcdH0pXG4gICAgXHQuZmFpbCgoe3Jlc3BvbnNlSlNPTn0pID0+IHtcblx0ICAgIHJlc3BvbnNlSlNPTi5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyKSA9PlxuXHQgICAgICBjb25zb2xlLmVycm9yKGVycilcblx0ICAgICk7XG5cdCAgfSk7XG4gICAgfVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0PGRpdj5cblx0XHQ8aDI+IFNpZ251cCA8L2gyPjxicj48L2JyPlxuXHRcdDxkaXY+XG5cdFx0PGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD4mbmJzcDsmbmJzcDtcblx0XHQ8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHR5cGUgPSAndGV4dCcgcGxhY2Vob2xkZXIgPSBcIkVudGVyIHVzZXJuYW1lXCI+PC9pbnB1dD48YnI+PC9icj48YnI+PC9icj5cblx0XHQ8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPiZuYnNwOyZuYnNwO1xuXHRcdDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZSA9ICdwYXNzd29yZCcgcGxhY2Vob2xkZXIgPSBcIkVudGVyIHBhc3N3b3JkXCI+PC9pbnB1dD48YnI+PC9icj5cblx0XHQ8L2Rpdj48YnI+PC9icj5cblx0XHQ8ZGl2PlxuXHQgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBvc3Qoe3VzZXJuYW1lOmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpLnZhbHVlLHBhc3N3b3JkOmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlfSl9PnNpZ251cDwvYnV0dG9uPlxuXHQgICAgPC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG53aW5kb3cuU2lnbnVwID0gU2lnbnVwOyJdfQ==