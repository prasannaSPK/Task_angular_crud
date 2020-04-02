import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
/* no need of this as we r using -ng instead of -scripts 
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';

*/

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';/* not here we import grid module but in component we import gridcomponent */
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

import { MatTableModule,MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatOptionModule, MatSelectModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    EmpDashboardComponent,
    // EmpDetailsComponent,
    // jqxGridComponent,
    // jqxWindowComponent,
    // jqxInputComponent

    // jqxInputModule,
    // jqxWindowModule
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    HttpClientModule,
    MatFormFieldModule ,
    
    
    FormsModule,
    jqxGridModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxWindowModule,
    jqxButtonModule,

    
    
    
  ],
  
  providers: [

  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
