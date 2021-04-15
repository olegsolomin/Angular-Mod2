(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    // wtbctrl - what to buy
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var wtbctrl = this;
        wtbctrl.items = ShoppingListCheckOffService.getItemsWTB();
        wtbctrl.boughtItem = function (itemIndex) {
        ShoppingListCheckOffService.boughtItem(itemIndex);
    };
    }
    //abctrl - already bought
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
       var abctrl = this;
        abctrl.items = ShoppingListCheckOffService.getItemsAB();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items to buy - WTB
        var WTBlist = [
            {name: "cookies", quantity: 10},
            {name: "tea", quantity: 5},
            {name: "frozen pizza", quantity: 3},
            {name: "cheese", quantity: 2},
            {name: "onion", quantity: 3},
        ];
        var ABlist = [];
       
        // WTB list
        service.getItemsWTB = function () {
            return WTBlist;
        };

        // move to bought
        service.boughtItem = function (itemIndex) {
            var item =  WTBlist.splice(itemIndex, 1);
            ABlist.push(item);
        };
        
        //Already Bought list
        service.getItemsAB = function () {
            return ABlist;
        };
    
    }
})();