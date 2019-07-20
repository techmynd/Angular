import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import components
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example.component';
import { Example2Component } from './components/example2/example2.component';

// routes
const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'example2', component: Example2Component },
];

@NgModule({
  // register components
  declarations: [AppComponent, ExampleComponent, Example2Component],
  imports: [BrowserModule, FormsModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
