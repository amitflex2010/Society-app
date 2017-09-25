(function() {
	'use strict';

	angular
		.module('societyApp.admin-profile')
		.factory('complaintService', complaintService);

	complaintService.$inject = ['$http'];


	/* @ngInject */
	function complaintService($http) 
    {
        var service = {};
		service.complaints= complaints;
		return service;

        function complaints(callback)
		{
			
			return $http.get('http://localhost:4000/users/complaints').success(function (response, status, headers, config) 
			{
                    callback(response, status, headers, config);
                    handleSuccess(response)
					
            }).error(function (response, status, headers, config)
			{
				
				//alert(response+"--"+status);
                    handleError(response)
					callback(response, status, headers, config);
					
			});
        
		}
		function handleSuccess(res) {

            console.log(res)
            return res.data;

        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }

    }
})();