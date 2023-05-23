import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pickup } from 'src/app/model/pickup';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-pickup-editor',
  templateUrl: './pickup-editor.component.html',
  styleUrls: ['./pickup-editor.component.scss']
})
export class PickupEditorComponent {
 ar: ActivatedRoute = inject(ActivatedRoute);

  stockService = inject(StockService);

  router: Router = inject(Router);

  pickup$ = this.ar.params.pipe(
    switchMap( params => this.stockService.get(params['id']))
  );

  onUpdate(pickup: Pickup): void {
    this.stockService.update(pickup).subscribe(
      () => this.router.navigate(['/admin'])
    )
  }
}
