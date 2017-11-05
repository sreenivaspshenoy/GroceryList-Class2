import { Component } from '@angular/core';

@Component({
    selector : 'grocery-item',
    templateUrl : './grocery-item.component.html'

})
export class GroceryItemComponent{
    itemName: string = "Apple";
}