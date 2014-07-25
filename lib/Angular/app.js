(function() {

  var app = angular.module('gemStore', [ ]);
    app.controller('StoreController', function (){
      this.products = gems;
    });
  
    var gems = [
      {name:'saphyr', price: 2, canPurchase: true },
      {name:'diamond', price: 10000, canPurchase: true },
      {name:'jade', price: 10, canPurchase: true }
    ];
})();