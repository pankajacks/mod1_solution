(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.status = "";
        $scope.meals = "item";
        $scope.checkIfTooMuch = function(){
            $scope.class_name = "green_border";
            $scope.text_color = "green_text_color";
            var no_of_item = getNoOfItem($scope.meals.split(","));
            if (no_of_item == 0) {
                $scope.status = "Please enter data first";
                $scope.class_name = "red_border";
                $scope.text_color = "red_text_color";
            } else if (no_of_item <= 3) {
                $scope.status = "Enjoy!";
            } else if (no_of_item > 3) {
                $scope.status = "Too much!"; 
            }
        };

        function getNoOfItem(items) {
            var noOfItem = 0;
            for (const str of items) {
                var item = str;
                item = item.trim();
                if (item != "" && item != " ") {
                    noOfItem += 1;
                }
            }
            return noOfItem;
        }
    };
})();