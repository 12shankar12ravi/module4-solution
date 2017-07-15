(function(){

angular.module ('data')
.controller('CategoryListController' , CategoryListController);

CategoryListController.$inject = ['categories'];
function CategoryListController (categories){
    var categoryList = this;
    categoryList.categories = categories.data;
    console.log("CATEGORY LIST--------",categoryList.categories);
}

})();
