(function () {
    'use strict';
    angular.module('ShoppingListApp', [])
        .controller('BoughtListController', BoughtListController)
        .controller('BuyListController', BuyListController)
        .service('ItemListService', ItemListService);
    
    BuyListController.$inject = ['ItemListService'];
    function BuyListController(ItemListService) {
        var buyList = this;
        
        buyList.items = ItemListService.getBuyItems();
        
        buyList.buyItem = function(index){
            ItemListService.buyItem(index);
        };
        
        buyList.empty = function(){
            return buyList.items.length === 0;
        }
    };

    BoughtListController.$inject = ['ItemListService'];
    function BoughtListController(ItemListService) {
        var boughtList = this;
        
        boughtList.items = ItemListService.getBoughtItems();
        
        boughtList.empty = function(){
            return boughtList.items.length === 0;
        }
    };

    function ItemListService() {
        var service = this;
        // List of shopping items
        var buyItems = [ {
                name: "Cookies",
                quantity: 10,
            },{
                name: "Chips",
                quantity: 5,
            },{
                name: "Fruits",
                quantity: 3,
            },{
                name: "Meat",
                quantity: 3,
            },{
                name: "Milk",
                quantity: 4,
            },
            
        ];
        var boughtItems = [];
        
        service.buyItem = function (index) {
            boughtItems.push(buyItems[index]);            
            buyItems.splice(index,1);
            console.log(boughtItems);
        };
        service.getBuyItems = function () {
            return buyItems;
        };
        service.getBoughtItems = function () {
            return boughtItems;
        };

    }
    
})();