import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { craCoreFeatureKey, craCoreReducers } from './reducers/core.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(
      craCoreFeatureKey,
      craCoreReducers,
    ),
    EffectsModule.forFeature([
      // BroomSportEffects,
      // BroomCompetitionsEffect
    ]),
  ],
})
export class CraStoresCoreModule {}
