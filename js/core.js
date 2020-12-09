//继承
Function.prototype.Extends=function(Super){
    function F(){}
    F.prototype=Super.prototype;
    var pt=new F();

    var clazz=this;
    clazz.prototype=pt;
    pt.constructor=clazz;

    pt.Super=function(){
        return Super.prototype;
    }
}

function Class(){}
//动态加载类
Class.forName=function(classUri){
    return new Promise(function (resolve, reject) {
        require([classUri],function(clazz){
            resolve(clazz);
        });
    });
}

//类似java的import
var Import=define;