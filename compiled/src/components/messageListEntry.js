'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageListEntry = function (_React$Component) {
	_inherits(MessageListEntry, _React$Component);

	function MessageListEntry(props) {
		_classCallCheck(this, MessageListEntry);

		console.log(props);

		var _this = _possibleConstructorReturn(this, (MessageListEntry.__proto__ || Object.getPrototypeOf(MessageListEntry)).call(this, props));

		_this.state = {
			message: '',
			title: ''
		};
		return _this;
	}

	_createClass(MessageListEntry, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				{ className: 'message-list-entry' },
				React.createElement(
					'div',
					{ className: 'media-body' },
					React.createElement(
						'div',
						{ className: 'message-list-entry-title', onClick: function onClick() {
								return _this2.props.selectBlog(_this2.props.blog);
							} },
						this.props.blog.title
					)
				)
			);
		}
	}]);

	return MessageListEntry;
}(React.Component);

window.MessageListEntry = MessageListEntry;

// var MessageListEntry = ({props}) => ( 
//   <div className="message-list-entry">

//     <div className="media-body">
//     <div className="message-list-entry-title" onClick={() => props.selectBlog(props.blog)}>{props.blog.title}</div>
//     </div>
//   </div>
// );

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// MessageListEntry.propTypes = {
//   message: React.PropTypes.object.isRequired
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.MessageListEntry = MessageListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VMaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbIk1lc3NhZ2VMaXN0RW50cnkiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsIm1lc3NhZ2UiLCJ0aXRsZSIsInNlbGVjdEJsb2ciLCJibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsZ0I7OztBQUNMLDJCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQ2pCQyxVQUFRQyxHQUFSLENBQVlGLEtBQVo7O0FBRGlCLGtJQUVYQSxLQUZXOztBQUdqQixRQUFLRyxLQUFMLEdBQWE7QUFDWkMsWUFBUyxFQURHO0FBRVpDLFVBQU87QUFGSyxHQUFiO0FBSGlCO0FBT2pCOzs7OzJCQUVNO0FBQUE7O0FBQ1AsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLG9CQUFmO0FBQ0E7QUFBQTtBQUFBLE9BQUssV0FBVSxZQUFmO0FBQ007QUFBQTtBQUFBLFFBQUssV0FBVSwwQkFBZixFQUEwQyxTQUFTO0FBQUEsZUFBTSxPQUFLTCxLQUFMLENBQVdNLFVBQVgsQ0FBc0IsT0FBS04sS0FBTCxDQUFXTyxJQUFqQyxDQUFOO0FBQUEsUUFBbkQ7QUFDQyxXQUFLUCxLQUFMLENBQVdPLElBQVgsQ0FBZ0JGO0FBRGpCO0FBRE47QUFEQSxJQUREO0FBUUE7Ozs7RUFuQjhCRyxNQUFNQyxTOztBQXNCckNDLE9BQU9YLGdCQUFQLEdBQTBCQSxnQkFBMUI7O0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Im1lc3NhZ2VMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNZXNzYWdlTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0Y29uc29sZS5sb2cocHJvcHMpXG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1lc3NhZ2U6ICcnLFxuXHRcdFx0dGl0bGU6ICcnIFxuXHRcdH1cblx0fVxuXG5yZW5kZXIoKXtcblx0cmV0dXJuKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1saXN0LWVudHJ5XCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1saXN0LWVudHJ5LXRpdGxlXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZWxlY3RCbG9nKHRoaXMucHJvcHMuYmxvZyl9PlxuICAgICAgICB7dGhpcy5wcm9wcy5ibG9nLnRpdGxlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cdFx0KVxufVxufVxuXG53aW5kb3cuTWVzc2FnZUxpc3RFbnRyeSA9IE1lc3NhZ2VMaXN0RW50cnk7XG5cblxuXG5cbi8vIHZhciBNZXNzYWdlTGlzdEVudHJ5ID0gKHtwcm9wc30pID0+ICggXG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1saXN0LWVudHJ5XCI+XG4gIFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1saXN0LWVudHJ5LXRpdGxlXCIgb25DbGljaz17KCkgPT4gcHJvcHMuc2VsZWN0QmxvZyhwcm9wcy5ibG9nKX0+e3Byb3BzLmJsb2cudGl0bGV9PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvZGl2PlxuLy8gKTtcblxuLy8gLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuLy8gTWVzc2FnZUxpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4vLyAgIG1lc3NhZ2U6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuLy8gfTtcblxuLy8gLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbi8vIHdpbmRvdy5NZXNzYWdlTGlzdEVudHJ5ID0gTWVzc2FnZUxpc3RFbnRyeTsiXX0=