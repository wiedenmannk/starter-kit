import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "@dev/welcome/welcome.component";
import { DashboardComponent } from "@dev/dashboard/dashboard.component";
import { DragDropComponent } from "@dev/drag-drop/drag-drop.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "dragdrop", component: DragDropComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
