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
        wtbctrl.boughtItem = function (index) {
        ShoppingListCheckOffService.boughtItem(index);
    };
    }
    //abctrl - already bought
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
       var abctrl = this;
        abctrl.items = ShoppingListCheckOffService.getItemsAB()
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items to buy - WTB
        var BuyList = [
            {name: "cookies", quantity: 10},
            {name: "tea", quantity: 5},
            {name: "frozen pizza", quantity: 3},
            {name: "cheese", quantity: 2},
            {name: "onion", quantity: 3},
        ];
        var WTBlist = BuyList;
        // get wtbuy list
        service.getWTBlist = function () {
            return WTBlist;
        };
        // move to bought
        service.boughtItem = function (itemIndex) {
            var item = WTBlist[itemIndex];
            service.addBoughtItem(item);
            removeItemFromWTB(itemIndex);
        };
        // List of bought items
        var bought = [];
        var ABlist = bought;
        // remove from WTB
        service.removeItemFromWTB = function (itemIndex) {
            WTBlist.splice(itemIndex, 1);
        };
        // WTB list
        service.getItemsWTB = function () {
            return WTBlist;
        };
        //Already Bought list
        service.getItemsAB = function () {
            return ABlist;
        };
        //add to AB list
        service.addItemToAB = function (item) {
            ABlist.push(item);
        };
    }
})();