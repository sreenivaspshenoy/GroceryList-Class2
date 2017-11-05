import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  allowNewItem : boolean = true;
  addedItem : string = 'Rice';

  constructor() { 

    setTimeout(() => {
      this.allowNewItem = false;

    }, 2000);

  }

  //Event handler when item is added
  onItemAdded() {
    console.log('Item is added');

  }

 onInputChanged(event: any) {
   //console.log(event.target.value);
   this.addedItem = event.target.value;
 }
  

  ngOnInit() {
  }

}
