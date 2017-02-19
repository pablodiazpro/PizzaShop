/**
 * Created by pablo on 2/19/2017.
 */
(function() {
    "use strict";

    var module = angular.module("pizzaApp", ["ngRoute"]);

    module.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/order.tmpl.html',
            controller: 'orderController',
            controllerAs: "order"
        });

        $routeProvider.otherwise({redirectTo: '/'});
    });

    module.controller("orderController", function () {
       var order = this;

       order.orderCount = 0;

       order.submitOrder = function () {
           order.orderCount++;
       };
    });
})();
