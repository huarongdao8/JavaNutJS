Import([], function () {
	function BaseClass(){
	}

	BaseClass.prototype.test=function(){
		alert("test in BaseClass!");
	}

	return BaseClass;
});