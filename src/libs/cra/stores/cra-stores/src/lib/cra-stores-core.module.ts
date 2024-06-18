import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { craCoreFeatureKey, craCoreReducers } from './reducers/core.reducer';
import { CraEmployeeEffects } from './effects/employee.effects';
import { CraProjectEffects } from './effects/project.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(
      craCoreFeatureKey,
      craCoreReducers,
    ),
    EffectsModule.forFeature([
      CraEmployeeEffects,
      CraProjectEffects,
    ]),
  ],
})
export class CraStoresCoreModule {}
