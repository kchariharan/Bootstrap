phoneController.controller('PhoneListCtrl',['$scope','testService','testFactory',function($scope,testS,testF){
	
	$scope.phones=[
 			  {
		'name' : 'Nexus S',
		'snippet' : 'Fast just got faster with Nexus S.',
		'age' : '1'
	}, {
		'name' : 'Motorola XOOM with Wi-Fi',
		'snippet' : 'The Next, Next Generation tablet.',
		'age' : '2'
	}, {
		'name' : 'One Plus 1',
		'snippet' : 'Fast just got faster OPPO.',
		'age' : '3'
	}, {
		'name' : 'Alpha Galaxy',
		'snippet' : 'The Next, Next Generation Galaxy.',
		'age' : '4'
	}, {
		'name' : 'MOTOROLA XOOM',
		'snippet' : 'The Next, Next Generation tablet.',
		'age' : '5'
	}
			];
	
	$scope.orderProp='age';
	
	
	/*$scope.doClick = function() {
        alert("clicked");
    }*/
	
	$scope.fromService = testS.sayHello("World");
	$scope.fromFactory = testF.sayHello("World");
	$scope.fromFactory = testF.goodBye("World");
	
	}]);

	


/*describe('PhoneListCtrl', function(){

	it('should create "phones" model with 3 phones', function() {
	  var scope = {},
	      ctrl = new PhoneListCtrl(scope);

	  expect(scope.phones.length).toBe(3);
	});

});*/




