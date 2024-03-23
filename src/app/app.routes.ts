import { Routes } from '@angular/router';
import { HomeComponent } from '../Pages/home/home.component';
import { UsersComponent } from '../Pages/users/users.component';
import { CategoryComponent } from '../Pages/category/category.component';
import { SubCategoryComponent } from '../Pages/sub-category/sub-category.component';
import { AboutComponent } from '../Pages/about/about.component';
import { NotFoundComponent } from '../Pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'users', component: UsersComponent },
            { path: 'category', component: CategoryComponent },
            { path: 'sub-category', component: SubCategoryComponent },

        ]
    },

    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent },
];
