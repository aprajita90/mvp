"use strict";

var MessageListEntry = function MessageListEntry(props) {
  return React.createElement(
    "div",
    { className: "video-list-entry" },
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { className: "video-list-entry-title", onClick: function onClick() {
            return props.selectBlog(props.blog);
          } },
        props.blog.title
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MessageListEntry.propTypes = {
  message: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MessageListEntry = MessageListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbmV0cy9tZXNzYWdlTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNZXNzYWdlTGlzdEVudHJ5IiwicHJvcHMiLCJzZWxlY3RCbG9nIiwiYmxvZyIsInRpdGxlIiwicHJvcFR5cGVzIiwibWVzc2FnZSIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFEO0FBQUEsU0FDckI7QUFBQTtBQUFBLE1BQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWYsRUFBd0MsU0FBUztBQUFBLG1CQUFNQSxNQUFNQyxVQUFOLENBQWlCRCxNQUFNRSxJQUF2QixDQUFOO0FBQUEsV0FBakQ7QUFBc0ZGLGNBQU1FLElBQU4sQ0FBV0M7QUFBakc7QUFEQTtBQURGLEdBRHFCO0FBQUEsQ0FBdkI7O0FBUUE7QUFDQTtBQUNBSixpQkFBaUJLLFNBQWpCLEdBQTZCO0FBQzNCQyxXQUFTQyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUE3Qjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9YLGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJmaWxlIjoibWVzc2FnZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNZXNzYWdlTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoIFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnlcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktdGl0bGVcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZWxlY3RCbG9nKHByb3BzLmJsb2cpfT57cHJvcHMuYmxvZy50aXRsZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5NZXNzYWdlTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbiAgbWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93Lk1lc3NhZ2VMaXN0RW50cnkgPSBNZXNzYWdlTGlzdEVudHJ5OyJdfQ==