Import(["/js/BaseClass.js"], function (BaseClass) {
	function MainClass(){
		BaseClass.call(this);
	}
	MainClass.Extends(BaseClass);

	MainClass.prototype.test=function(){
		this.Super().test();

		alert("test in MainClass!");
	}

	MainClass.main=function(){
		var mc=new MainClass();
		mc.test();
	}

	return MainClass;
});