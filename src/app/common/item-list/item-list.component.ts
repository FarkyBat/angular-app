import { Component, OnInit, inject } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { Pickup } from 'src/app/model/pickup';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  providers: [StockService]
})
export class ItemListComponent{
  stockService1 = inject(StockService);
  stockList$ = this.stockService1.list$; //getAll()


  onRemovePickup(pickup: Pickup): void{
    if(!confirm('U sure?')){
      return;
    }
    this.stockService1.delete(pickup.id).subscribe(() => this.stockList$ = this.stockService1.list$) //getAll()
  }
}
