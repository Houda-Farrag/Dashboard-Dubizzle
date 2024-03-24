import { Routes } from '@angular/router';
import { HomeComponent } from '../Pages/home/home.component';
import { UsersComponent } from '../Pages/users/users.component';
import { CategoryComponent } from '../Pages/category/category.component';
import { SubCategoryComponent } from '../Pages/sub-category/sub-category.component';

import { NotFoundComponent } from '../Pages/not-found/not-found.component';
import { ChartsComponentComponent } from './Components/charts-component/charts-component.component';
import { PropertiesComponent } from '../Pages/properties/properties.component';
import { SignInComponent } from '../Pages/sign-in/sign-in.component';
import { ProductsComponent } from '../Pages/products/products.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'sub-category', component: SubCategoryComponent },
    { path: 'properties', component: PropertiesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'signin', component: SignInComponent },

    { path: '**', component: NotFoundComponent },
];
