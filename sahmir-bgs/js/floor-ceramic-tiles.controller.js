'use strict';

app.controller('floorceramictilesCotroller', ['$scope', '$document', 'screenSize', 
function ($scope, $document, screenSize) {
 
//Mobile screenSize
    $scope.isShow = false;
    $scope.isMobile = screenSize.is('xs, sm');
    $scope.isMobile = screenSize.onChange($scope, 'xs, sm', function (isMatch) {
        $scope.isMobile = isMatch;
    });

    // console.log($scope.isMobile);


    $scope.products =  [
                    {
                        id: 1,
                        imgUrlstyle: "img/catalogue-01.jpg",
                        name: "Product name 01",
                        pCode: "T467",
                    },
                    {
                        id: 2,
                        imgUrlstyle: "img/catalogue-02.jpg",
                        name: "Product name 02",
                        pCode: "T102",
                    },
                    {
                        id: 3,
                        imgUrlstyle: "img/catalogue-03.jpg",
                        name: "Product name 03",
                        pCode: "T053",
                    },
                    {
                        id: 2,
                        imgUrlstyle: "img/catalogue-02.jpg",
                        name: "Product name 02",
                        pCode: "T102",
                    },
                    {
                        id: 5,
                        imgUrlstyle: "img/catalogue-01.jpg",
                        name: "Product name 01",
                        pCode: "T467",
                    },
                    {
                        id: 6,
                        imgUrlstyle: "img/catalogue-02.jpg",
                        name: "Product name 02",
                        pCode: "T102",
                    },
                    {
                        id: 7,
                        imgUrlstyle: "img/catalogue-03.jpg",
                        name: "Product name 03",
                        pCode: "T053",
                    },
                    {
                        id: 8,
                        imgUrlstyle: "img/catalogue-02.jpg",
                        name: "Product name 02",
                        pCode: "T102",
                    }
                ]
        

}]);

 