import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedUiComponent } from "../../../../libs/shared/ui/src/lib/shared-ui/shared-ui.component";
import { JobCardComponent } from "../../../../libs/shared/ui/src/lib/job-card/job-card.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, SharedUiComponent, JobCardComponent],
  declarations: [HomePage],
})
export class HomePageModule {}
