(function(){

angular.module ( 'data')
.component('itemList',{
  templateUrl : 'src/templates/items.template.html',
  bindings : {
    items : '<'
  }
})



})();
