(function() {
	'use strict';

	angular
		.module('societyApp.admin-profile')
		.controller('AdminController', AdminController);

	AdminController.$inject = ['$scope','$window','$ionicNavBarDelegate','menuItemsAdmin'];

	/* @ngInject */
	function AdminController($scope,$window,$ionicNavBarDelegate,menuItemsAdmin) 
	{
	
		var objval = $window.localStorage.getItem('userobj');
		var parsedobj = JSON.parse(objval)
							
		
			var vm = angular.extend(this, {
				entries: menuItemsAdmin,
				myDetails:parsedobj
			});


		vm.title = "Welcome "+vm.myDetails.username+" !";
		
	}
})();