(function() {
	'use strict';

	angular
		.module('societyApp.admin-profile', [
			'ionic',
			
			
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.admin_profile', {
					url: '/adminprofile',
					cache: false,
					views: {
						'menuContent': {
							templateUrl: 'js/admin-profile/admin.html',
							controller: 'AdminController as vm'
						}
					}
				})
				.state('app.subadmin_profile', {
					url: '/subadminprofile',
					
					views: {
						'menuContent': {
							templateUrl: 'js/admin-profile/sub-admin/sub-admin.html',
							controller: 'AdminController as vm'
						}
					}
				}).state('app.society-complaints', {
					url: '/societycomplaints',
					
					views: {
						'menuContent': {
							templateUrl: 'js/admin-profile/society-complaints/society-complaints.html',
							controller: 'ComplaintController as vm'
						}
					}
				}).state('app.society-complaints-details', {
					url: '/societycomplaints/:tenant_id',
					
					views: {
						'menuContent': {
							templateUrl: 'js/admin-profile/society-complaints/society-complaintdetails.html',
							controller: 'ComplaintDetailController as vm'
						}
					}
				})
				
		});
})();