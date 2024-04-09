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
import { ProductDetailsComponent } from '../Pages/product-details/product-details.component';
import { UserDetailsComponent } from '../Pages/user-details/user-details.component';
import { UpdateUserComponent } from '../Pages/update-user/update-user.component';
import { UpdateProductComponent } from '../Pages/update-product/update-product.component';
import { TeamComponent } from '../Pages/team/team.component';
import { authGuard } from './Guards/auth.guard';
import { ProfileComponent } from '../Pages/profile/profile.component';
import { SettingComponent } from '../Pages/setting/setting.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full', },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'users', component: UsersComponent, canActivate: [authGuard] },
    { path: 'category', component: CategoryComponent, canActivate: [authGuard] },
    { path: 'sub-category', component: SubCategoryComponent, canActivate: [authGuard] },
    { path: 'properties', component: PropertiesComponent, canActivate: [authGuard] },
    { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
    { path: 'signin', component: SignInComponent, },
    { path: 'product-details/:idprod', component: ProductDetailsComponent, canActivate: [authGuard] },
    { path: 'user-details/:iduser', component: UserDetailsComponent, canActivate: [authGuard] },
    { path: 'product-details/:idprod', component: ProductDetailsComponent, canActivate: [authGuard] },
    { path: 'user-details/:iduser', component: UserDetailsComponent, canActivate: [authGuard] },
    { path: 'product-update/:idprod', component: UpdateProductComponent, canActivate: [authGuard] },
    { path: 'team', component: TeamComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'setting', component: SettingComponent, canActivate: [authGuard] },

    { path: '**', component: NotFoundComponent },
    // { path: 'user-update/:iduser', component: UpdateUserComponent, canActivate: [authGuard] },
];
