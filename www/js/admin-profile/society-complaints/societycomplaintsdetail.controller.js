(function() {
	'use strict';

	angular
		.module('societyApp.admin-profile')
		.controller('ComplaintDetailController', ComplaintDetailController);

		ComplaintDetailController.$inject = ['$scope','complaintService'];
		
		/* @ngInject */
		function ComplaintDetailController($scope,complaintService) 
		{
			
		}
})();
