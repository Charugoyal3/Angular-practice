import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { ListingComponent } from "./listing/listing.component";
import { ObservableComponent } from "./observable/observable.component";

const routes: Routes = [
    {
        path: 'detail/:id', component: DetailComponent
    }, {
        path: 'listing', component: ListingComponent
    }, {
        path: 'observable', component: ObservableComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}