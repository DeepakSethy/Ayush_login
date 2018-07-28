import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PopularComponent } from '../popular/popular.component';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { ServicesComponent } from '../services/services.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { SearchComponent } from '../search/search.component';
import { RegisterComponent } from '../register/register.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'popular', component: PopularComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

export const RouteConfig: ModuleWithProviders = RouterModule.forRoot(routes);
