import { MainModule } from '@modules/main/main.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ziehe npm lib direkt aus dem node_modules ordner
import { StarterLibModule } from 'starter-lib';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsOverviewComponent } from '../../forms/forms-overview/forms-overview.component';

@NgModule({
  declarations: [FormsOverviewComponent],
  imports: [CommonModule, FormsRoutingModule, MainModule, StarterLibModule],
})
export class FormsModule {}
