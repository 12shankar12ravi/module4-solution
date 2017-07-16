(function(){

angular.module ( 'data').
service('MenuDataService',MenuDataService )
.constant('myURL',"https://davids-restaurant.herokuapp.com/");


MenuDataService.$inject = ['$http' , 'myURL'];
function MenuDataService ( $http,myURL){

  var service = this;

  service.getAllCategories = function () {
      var response= $http({
         method: "GET",
         url: (myURL+"categories.json")
      });

      return response;
    }

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
        method: "GET",
        url:(myURL+"/menu_items.json"),
        params: {
          category: categoryShortName
        }
    });

    return response;
  }


}

})();
