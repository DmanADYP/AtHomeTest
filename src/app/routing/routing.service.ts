import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HelloComponent } from "app/component/hello.component";



const appRoutes : Routes = [
    {
        path:'',
        component: HelloComponent
    },
    {
        path:'home',
        component: HelloComponent
    }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
