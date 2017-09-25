(function() {
	'use strict';

	angular
		.module('societyApp.admin-profile')
		.factory('menuItemsAdmin', menuItemsAdmin);

	menuItemsAdmin.$inject = [];

	/* @ngInject */
	function menuItemsAdmin() {
		var data = [{
			title: 'Society Complaints',
			path: 'societycomplaints',
			icon: 'ion-person-stalker'
		}, {
			title: 'Approval Requests',
			path: 'products-extended',
			icon: 'ion-arrow-down-c'
		}, {
			title: 'Send Message to Members',
			path: 'galleries',
			icon: 'ion-ios-chatboxes'
		}, {
			title: 'Message Board',
			path: 'map',
			icon: 'ion-android-mail'
		},
		{
			title: 'Vendor Management',
			path: 'map',
			icon: 'ion-settings'
		},
		{
			title: 'Inventory Management',
			path: 'map',
			icon: 'ion-social-dropbox'
		}];

		return data;
	}
})();