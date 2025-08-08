import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    BreadcrumbComponent,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[ CommonModule, FormsModule,ReactiveFormsModule,HttpClientModule,BreadcrumbComponent]
})
export class SharedModule { }
