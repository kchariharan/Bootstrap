phoneController.service('testService', function(){
    this.sayHello= function(text){
        return "Service says \"Hello " + text + "\"";
    };        
});
 
