phoneController.factory('testFactory', function(){
    return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        },
        goodBye:function(text){
        	return "Factory says \"Good Bye " + text + "\"";
        }
    }               
});