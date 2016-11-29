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


    $scope.products = [
        {
            id: 1,
            imgUrl: "img/catalogue-01.jpg",
            name: "Product name 01",
            pCode: "T154",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            productThumbs: [
                {
                    id: 1,
                    imgUrlstyle: "img/catalogue-01.jpg",
                    name: "Product name 01",
                    pCode: "T467",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                },
                {
                    id: 1,
                    imgUrlstyle: "img/catalogue-02.jpg",
                    name: "Product name 02",
                    pCode: "T102",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
                },
                {
                    id: 1,
                    imgUrlstyle: "img/catalogue-03.jpg",
                    name: "Product name 03",
                    pCode: "T053",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                }
            ]
        } 
    ]

}]);

 