'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_ReactComponent) {
	_inherits(Signup, _ReactComponent);

	function Signup(props) {
		_classCallCheck(this, Signup);

		return _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));
	}

	_createClass(Signup, [{
		key: 'post',
		value: function post(signup) {
			var self = this;
			//console.log(login.login);
			$.post('/signup', { username: signup.signup.value, password: signup.password.value }).done(function (data) {
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
					React.createElement('input', { id: 'username', type: 'text', placeholder: 'Enter username' }),
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
								return _this2.post(_defineProperty({ signup: document.getElementById('username') }, 'signup', document.getElementById('password')));
							} },
						'signup'
					)
				)
			);
		}
	}]);

	return Signup;
}(ReactComponent);

window.Signup = Signup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbmV0cy9zaWdudXAuanN4Il0sIm5hbWVzIjpbIlNpZ251cCIsInByb3BzIiwic2lnbnVwIiwic2VsZiIsIiQiLCJwb3N0IiwidXNlcm5hbWUiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiZG9uZSIsImRhdGEiLCJyb3V0ZXIiLCJwdXNoIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsImVycm9yIiwiZXJyb3JzIiwiZm9yRWFjaCIsImVyciIsImNvbnNvbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDTCxpQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHlHQUNYQSxLQURXO0FBRWpCOzs7O3VCQUNJQyxNLEVBQU87QUFDUixPQUFJQyxPQUFPLElBQVg7QUFDQTtBQUNBQyxLQUFFQyxJQUFGLENBQU8sU0FBUCxFQUFrQixFQUFDQyxVQUFVSixPQUFPQSxNQUFQLENBQWNLLEtBQXpCLEVBQWdDQyxVQUFVTixPQUFPTSxRQUFQLENBQWdCRCxLQUExRCxFQUFsQixFQUVDRSxJQUZELENBRU0sVUFBU0MsSUFBVCxFQUFjO0FBQ25CLFFBQUdBLElBQUgsRUFBUztBQUNSUCxVQUFLRixLQUFMLENBQVdVLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLEdBQXZCO0FBQ0EsS0FGRCxNQUVPO0FBQ05ULFVBQUtGLEtBQUwsQ0FBV1UsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsUUFBdkI7QUFDQTtBQUNELElBUkQsRUFTQ0MsSUFURCxDQVNNLGdCQUFvQjtBQUFBLFFBQWxCQyxZQUFrQixRQUFsQkEsWUFBa0I7O0FBQzFCQSxpQkFBYUMsS0FBYixDQUFtQkMsTUFBbkIsQ0FBMEJDLE9BQTFCLENBQWtDLFVBQUNDLEdBQUQ7QUFBQSxZQUNoQ0MsUUFBUUosS0FBUixDQUFjRyxHQUFkLENBRGdDO0FBQUEsS0FBbEM7QUFHRCxJQWJDO0FBY0E7OzsyQkFDSTtBQUFBOztBQUNQO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxRQUFPLE9BQUksVUFBWDtBQUFBO0FBQUEsTUFEQTtBQUVBLG9DQUFPLElBQUcsVUFBVixFQUFxQixNQUFPLE1BQTVCLEVBQW1DLGFBQWMsZ0JBQWpELEdBRkE7QUFHQTtBQUFBO0FBQUEsUUFBTyxPQUFJLFVBQVg7QUFBQTtBQUFBLE1BSEE7QUFJQSxvQ0FBTyxJQUFHLFVBQVYsRUFBcUIsTUFBTyxVQUE1QixFQUF1QyxhQUFjLGdCQUFyRDtBQUpBLEtBREE7QUFPQTtBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUEsUUFBUSxTQUFTO0FBQUEsZUFBTSxPQUFLYixJQUFMLG1CQUFXSCxRQUFPa0IsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUFsQixjQUE2REQsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUE3RCxFQUFOO0FBQUEsUUFBakI7QUFBQTtBQUFBO0FBREg7QUFQQTtBQVdBOzs7O0VBbENtQkMsYzs7QUFvQ3JCQyxPQUFPdkIsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2lnbnVwIGV4dGVuZHMgUmVhY3RDb21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRwb3N0KHNpZ251cCl7XG4gICAgXHR2YXIgc2VsZiA9IHRoaXM7XG4gICAgXHQvL2NvbnNvbGUubG9nKGxvZ2luLmxvZ2luKTtcbiAgICBcdCQucG9zdCgnL3NpZ251cCcsIHt1c2VybmFtZTogc2lnbnVwLnNpZ251cC52YWx1ZSwgcGFzc3dvcmQ6IHNpZ251cC5wYXNzd29yZC52YWx1ZX0pXG5cbiAgICBcdC5kb25lKGZ1bmN0aW9uKGRhdGEpe1xuICAgIFx0XHRpZihkYXRhKSB7XG4gICAgXHRcdFx0c2VsZi5wcm9wcy5yb3V0ZXIucHVzaCgnLycpXG4gICAgXHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0c2VsZi5wcm9wcy5yb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICBcdFx0fVxuICAgIFx0fSlcbiAgICBcdC5mYWlsKCh7cmVzcG9uc2VKU09OfSkgPT4ge1xuXHQgICAgcmVzcG9uc2VKU09OLmVycm9yLmVycm9ycy5mb3JFYWNoKChlcnIpID0+XG5cdCAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuXHQgICAgKTtcblx0ICB9KTtcbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdDxkaXY+XG5cdFx0PGRpdj5cblx0XHQ8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTo8L2xhYmVsPlxuXHRcdDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgdHlwZSA9ICd0ZXh0JyBwbGFjZWhvbGRlciA9IFwiRW50ZXIgdXNlcm5hbWVcIj48L2lucHV0PlxuXHRcdDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG5cdFx0PGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlID0gJ3Bhc3N3b3JkJyBwbGFjZWhvbGRlciA9IFwiRW50ZXIgcGFzc3dvcmRcIj48L2lucHV0PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXY+XG5cdCAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucG9zdCh7c2lnbnVwOmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpLHNpZ251cDpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKX0pfT5zaWdudXA8L2J1dHRvbj5cblx0ICAgIDwvZGl2PlxuXHRcdDwvZGl2PlxuXHR9XG59XG53aW5kb3cuU2lnbnVwID0gU2lnbnVwOyJdfQ==