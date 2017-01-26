"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageList = function (_React$Component) {
	_inherits(MessageList, _React$Component);

	function MessageList(props) {
		_classCallCheck(this, MessageList);

		console.log(props);

		var _this = _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(MessageList, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return !this.props.messages ? React.createElement(
				"div",
				{ className: "message-show" },
				"no blog"
			) : React.createElement(
				"div",
				null,
				this.props.messages.map(function (blog) {
					return React.createElement(MessageListEntry, { blog: blog, selectBlog: _this2.props.selectBlog });
				})
			);
		}
	}]);

	return MessageList;
}(React.Component);

// var MessageList = ({messages, selectBlog}) => (
//   //<div> {messages}</div>
//   !messages ? <div className="message-show">no blog</div>:
//   <div >
//     {messages.map(blog => <MessageListEntry blog={blog} selectBlog ={selectBlog} />
//     )}
//   </div>
// );


window.MessageList = MessageList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VMaXN0LmpzeCJdLCJuYW1lcyI6WyJNZXNzYWdlTGlzdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwibWVzc2FnZXMiLCJtYXAiLCJibG9nIiwic2VsZWN0QmxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFc7OztBQUNMLHNCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQ2pCQyxVQUFRQyxHQUFSLENBQVlGLEtBQVo7O0FBRGlCLHdIQUVYQSxLQUZXOztBQUdqQixRQUFLRyxLQUFMLEdBQWEsRUFBYjtBQUhpQjtBQU1qQjs7OzsyQkFDTztBQUFBOztBQUNQLFVBRUMsQ0FBQyxLQUFLSCxLQUFMLENBQVdJLFFBQVosR0FBdUI7QUFBQTtBQUFBLE1BQUssV0FBVSxjQUFmO0FBQUE7QUFBQSxJQUF2QixHQUNFO0FBQUE7QUFBQTtBQUNHLFNBQUtKLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0I7QUFBQSxZQUFRLG9CQUFDLGdCQUFELElBQWtCLE1BQU1DLElBQXhCLEVBQThCLFlBQWEsT0FBS04sS0FBTCxDQUFXTyxVQUF0RCxHQUFSO0FBQUEsS0FBeEI7QUFESCxJQUhIO0FBUUE7Ozs7RUFqQndCQyxNQUFNQyxTOztBQXVCaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0FDLE9BQU9YLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6Im1lc3NhZ2VMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWVzc2FnZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRjb25zb2xlLmxvZyhwcm9wcylcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblxuXHRcdFx0IXRoaXMucHJvcHMubWVzc2FnZXMgPyA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2Utc2hvd1wiPm5vIGJsb2c8L2Rpdj46XG5cdFx0XHQgIDxkaXYgPlxuXHRcdFx0ICAgIHt0aGlzLnByb3BzLm1lc3NhZ2VzLm1hcChibG9nID0+IDxNZXNzYWdlTGlzdEVudHJ5IGJsb2c9e2Jsb2d9IHNlbGVjdEJsb2cgPXt0aGlzLnByb3BzLnNlbGVjdEJsb2d9IC8+XG5cdFx0XHQgICAgKX1cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHQpO1xuXHR9XG59XG5cblxuXG5cbi8vIHZhciBNZXNzYWdlTGlzdCA9ICh7bWVzc2FnZXMsIHNlbGVjdEJsb2d9KSA9PiAoXG4vLyAgIC8vPGRpdj4ge21lc3NhZ2VzfTwvZGl2PlxuLy8gICAhbWVzc2FnZXMgPyA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2Utc2hvd1wiPm5vIGJsb2c8L2Rpdj46XG4vLyAgIDxkaXYgPlxuLy8gICAgIHttZXNzYWdlcy5tYXAoYmxvZyA9PiA8TWVzc2FnZUxpc3RFbnRyeSBibG9nPXtibG9nfSBzZWxlY3RCbG9nID17c2VsZWN0QmxvZ30gLz5cbi8vICAgICApfVxuLy8gICA8L2Rpdj5cbi8vICk7XG5cblxud2luZG93Lk1lc3NhZ2VMaXN0ID0gTWVzc2FnZUxpc3Q7Il19