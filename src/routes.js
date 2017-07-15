(function(){

angular.module ('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider' ,'$urlRouterProvider'];
function RoutesConfig ($stateProvider , $urlRouterProvider) {

  //Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  //Home page
  .state('home' ,{
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categories',{
    url: '/category-list',
    templateUrl: 'src/templates/main-categories.template.html',
    controller : 'CategoryListController as categoryList',
    resolve : {
      categories : ['MenuDataService' ,function (MenuDataService){
            return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/item-detail/{categoryShortName}',
    templateUrl: 'src/templates/main-items.template.html',
    controller : 'ItemListController as itemList',
    resolve : {
        items : ['MenuDataService' , '$stateParams',
          function (MenuDataService,$stateParams){
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }
      ]
    }
  });
}

})();
