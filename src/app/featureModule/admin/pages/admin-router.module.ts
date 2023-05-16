import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRouterRoutingModule } from './admin-router-routing.module';
import { TagsComponent } from './tags/tags.component';
import { AddtagsComponent } from './addtags/addtags.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EdittagsComponent } from './edittags/edittags.component';
import { AddListCategoryComponent } from './add-list-category/add-list-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ReportpostComponent } from './reportpost/reportpost.component';



@NgModule({
  declarations: [
    TagsComponent,
    AddtagsComponent,
    EdittagsComponent,
    AddListCategoryComponent,
    ListCategoryComponent,
    ReportpostComponent,
  ],
  imports: [
    CommonModule,
    AdminRouterRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: []
})
export class AdminRouterModule { }
