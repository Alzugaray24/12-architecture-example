import { inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IDish } from '../../../domain/model/dish.response.interface';
import { UpdateDishService } from '../../../application/update-dish.usecase';
import { DishState } from '../../../domain/state';

@Injectable({
  providedIn: 'root',
})
export class UpdateDishUseCase {
  private readonly _service = inject(UpdateDishService);
  private readonly _state = inject(DishState);
  private subscriptions: Subscription = new Subscription();

  initSubscription(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  execute(id: number, dish: Partial<IDish>): Observable<IDish> {
    return this._service.execute(id, dish).pipe(
      tap((updatedDish: IDish) => {
        const currentDishes = this._state.dishes.dishes.snapshot();
        const updatedDishes = currentDishes.map((d) =>
          d.id === updatedDish.id ? updatedDish : d
        );
        this._state.dishes.dishes.set(updatedDishes);
      })
    );
  }
}
