'use strict';

var db = require('../config'); //.. is parent directory


var Message = db.Model.extend({
	tableName: 'blog',
	hasTimestamps: true
});

module.exports = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9tb2RlbC9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbImRiIiwicmVxdWlyZSIsIk1lc3NhZ2UiLCJNb2RlbCIsImV4dGVuZCIsInRhYmxlTmFtZSIsImhhc1RpbWVzdGFtcHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLEtBQUtDLFFBQVEsV0FBUixDQUFULEMsQ0FBOEI7OztBQUc5QixJQUFJQyxVQUFVRixHQUFHRyxLQUFILENBQVNDLE1BQVQsQ0FBZ0I7QUFDN0JDLFlBQVcsTUFEa0I7QUFFN0JDLGdCQUFlO0FBRmMsQ0FBaEIsQ0FBZDs7QUFLQUMsT0FBT0MsT0FBUCxHQUFrQk4sT0FBbEIiLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkYiA9IHJlcXVpcmUoJy4uL2NvbmZpZycpOy8vLi4gaXMgcGFyZW50IGRpcmVjdG9yeVxuXG5cbnZhciBNZXNzYWdlID0gZGIuTW9kZWwuZXh0ZW5kKHtcblx0dGFibGVOYW1lOiAnYmxvZycsXG5cdGhhc1RpbWVzdGFtcHM6IHRydWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICBNZXNzYWdlOyJdfQ==