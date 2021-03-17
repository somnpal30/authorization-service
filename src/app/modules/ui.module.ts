import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DividerModule} from 'primeng/divider';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';
import {FormsModule} from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ListboxModule} from 'primeng/listbox';
import {AccordionModule} from 'primeng/accordion';
import {TagModule} from 'primeng/tag';

@NgModule({
  exports: [
    ButtonModule,
    OverlayPanelModule,
    DividerModule,
    CheckboxModule,
    TableModule,
    BadgeModule,
    FormsModule,
    RadioButtonModule,
    InputTextModule,
    ScrollPanelModule,
    ListboxModule,
    AccordionModule,
    TagModule
  ]
})

export class UiModule {

}
