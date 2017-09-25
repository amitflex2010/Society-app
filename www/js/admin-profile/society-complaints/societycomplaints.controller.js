(function() {
	'use strict';

	angular
		.module('societyApp.admin-profile')
		.controller('ComplaintController', ComplaintController);

		ComplaintController.$inject = ['$scope','complaintService'];
		
		/* @ngInject */
		function ComplaintController($scope,complaintService) 
		{

			var vm = this;
           
			$scope.getAllComplaints = function ()
			{
				complaintService.complaints(function (response, status, headers, config) 
				{
					if(response)
					{
						if(status == 200)
						{
							vm.complaints = ((response));
							
						}
					}
				});

				
			}

			$scope.getAllComplaints();

		
			
		}
})();













