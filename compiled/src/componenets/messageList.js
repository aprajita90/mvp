"use strict";

var MessageList = function MessageList(_ref) {
  var messages = _ref.messages,
      selectBlog = _ref.selectBlog;
  return (
    // <div> {messages}</div>
    !messages ? React.createElement(
      "div",
      { className: "video-player" },
      "no blog"
    ) : React.createElement(
      "div",
      null,
      messages.map(function (blog) {
        return React.createElement(MessageListEntry, { blog: blog, selectBlog: selectBlog });
      })
    )
  );
};

window.MessageList = MessageList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbmV0cy9tZXNzYWdlTGlzdC5qc3giXSwibmFtZXMiOlsiTWVzc2FnZUxpc3QiLCJtZXNzYWdlcyIsInNlbGVjdEJsb2ciLCJtYXAiLCJibG9nIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGNBQWMsU0FBZEEsV0FBYztBQUFBLE1BQUVDLFFBQUYsUUFBRUEsUUFBRjtBQUFBLE1BQVlDLFVBQVosUUFBWUEsVUFBWjtBQUFBO0FBQ2hCO0FBQ0EsS0FBQ0QsUUFBRCxHQUFZO0FBQUE7QUFBQSxRQUFLLFdBQVUsY0FBZjtBQUFBO0FBQUEsS0FBWixHQUNBO0FBQUE7QUFBQTtBQUNHQSxlQUFTRSxHQUFULENBQWE7QUFBQSxlQUFRLG9CQUFDLGdCQUFELElBQWtCLE1BQU1DLElBQXhCLEVBQThCLFlBQWFGLFVBQTNDLEdBQVI7QUFBQSxPQUFiO0FBREg7QUFIZ0I7QUFBQSxDQUFsQjs7QUFVQUcsT0FBT0wsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoibWVzc2FnZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTWVzc2FnZUxpc3QgPSAoe21lc3NhZ2VzLCBzZWxlY3RCbG9nfSkgPT4gKFxuICAvLyA8ZGl2PiB7bWVzc2FnZXN9PC9kaXY+XG4gICFtZXNzYWdlcyA/IDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyXCI+bm8gYmxvZzwvZGl2PjpcbiAgPGRpdiA+XG4gICAge21lc3NhZ2VzLm1hcChibG9nID0+IDxNZXNzYWdlTGlzdEVudHJ5IGJsb2c9e2Jsb2d9IHNlbGVjdEJsb2cgPXtzZWxlY3RCbG9nfSAvPlxuICAgICl9XG4gIDwvZGl2PlxuKTtcblxuXG53aW5kb3cuTWVzc2FnZUxpc3QgPSBNZXNzYWdlTGlzdDsiXX0=