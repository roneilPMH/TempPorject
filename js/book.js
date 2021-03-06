var Book = function() {
	this.list = [];
};

Book.prototype.create = function(author, bookname, success, error) {
	var successFn = success || function() {};
	var errorFn = error || function() {};
	$.ajax({
		url: "./php/postAPI.php",
		type: "POST",
		data: {
			author: author,
			bookname: bookname,
			function: "create"
		},
		dataType: "json",
		success: function() {
			successFn(arguments[0])
		},
		error: function() {
			errorFn(arguments)
		}

	})
};

Book.prototype.delete = function(id, success, error) {
	var successFn = success || function() {};
	var errorFn = error || function() {};
	$.ajax({
		url: "./php/getAPI.php",
		type: "GET",
		data: {
			id: id,
			function: "delete"
		},
		dataType: "json",
		success: function() {
			successFn(arguments[0])
		},
		error: function() {
			errorFn(arguments)
		}

	})
};


Book.prototype.read = function(id, success, error) {
	var successFn = success || function() {};
	var errorFn = error || function() {};
	$.ajax({
		url: "./php/getAPI.php",
		type: "GET",
		data: {
			id: id,
			function: "read"
		},
		dataType: "json",
		success: function() {
			successFn(arguments[0])
		},
		error: function() {
			errorFn(arguments)
		}

	})
};

Book.prototype.update = function(id, author, bookname, success, error) {
	var successFn = success || function() {};
	var errorFn = error || function() {};
	$.ajax({
		url: "./php/postAPI.php",
		type: "POST",
		data: {
			author: author,
			bookname: bookname,
			id: id,
			function: "update"
		},
		dataType: "json",
		success: function() {
			successFn(arguments[0])
		},
		error: function() {
			errorFn(arguments)
		}

	})
};

Book.prototype.getList = function(success, error) {
	var successFn = success || function() {};
	var errorFn = error || function() {};
	$.ajax({
		url: "./php/getAPI.php",
		type: "GET",
		data: {
			function: "readbooks"
		},
		dataType: "json",
		success: function() {
			successFn(arguments[0])
		},
		error: function() {
			errorFn(arguments)
		}

	})
}