var app = angular.module('list',[]);
app.controller('maincontroller',['$scope' ,function($scope){  
  $scope.dict  ={
    "judul":[],
    "penulis":[],
    "tahun":[],
    "status":[]
  };
  $scope.additem = function(){
    $scope.dict['judul'].push($scope.judul);
    alert($scope.dict['judul']);
  }
}]);