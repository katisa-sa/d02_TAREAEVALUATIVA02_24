import { ExploreContainerComponent } from 'src/app/shared/componentes/explore-container/explore-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTabComponent } from './header-tab/header-tab.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderTabComponent, ExploreContainerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderTabComponent,
    ExploreContainerComponent
  ]
})
export class ComponentesModule { }
