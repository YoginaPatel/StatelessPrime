/*globals angular $ console*/

(function () {
    "use strict";

angular.module('angular.prime').directive('puiMenubar', function () {
    return {
        restrict: 'A',
        compile: function (element, attrs) {
            return function postLink (scope, element, attrs) {

                var options = scope.$eval(attrs.puiMenu) || {};
                if (element.find("h3").length > 0) {
                    console.log("Warning: "); // TODO
                }
                element.puimenubar({
                    autoDisplay: options.autoDisplay
                });

            };
        }
    };
});

}());
