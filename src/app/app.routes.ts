import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component'; // Adjust the path to where the component is located

export const routes: Routes = [
  { path: '', redirectTo: 'myform', pathMatch: 'full' },  // Redirect root to myform
  { path: 'myform', component: MyFormComponent },          // Route to MyFormComponent
  { path: '**', redirectTo: 'myform' }                     // Wildcard route to redirect any unknown path to myform
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
