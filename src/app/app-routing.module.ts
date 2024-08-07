import { FormsModule } from "./modules/forms/forms.module";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultLayoutComponent } from "./layout/default-layout/default-layout.component";
import { DevModule } from "@modules/dev/dev.module";
import { StarterLibComponent } from "starter-lib";

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        component: StarterLibComponent,
      },
      {
        path: "dev",
        loadChildren: () => DevModule,
      },
      {
        path: "forms",
        loadChildren: () => FormsModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
