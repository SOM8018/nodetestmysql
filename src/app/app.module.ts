import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { mysqlComponent } from './component/mysql.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
import { fetchService } from 'src/services/fetch.service';
import { insertService } from 'src/services/insert.service';
import { updateService } from 'src/services/update.service';
import { deleteService } from 'src/services/delete.service';
@NgModule({
  declarations: [
    AppComponent,mysqlComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [fetchService,insertService,updateService,deleteService],
  bootstrap: [mysqlComponent]
})
export class AppModule { }
