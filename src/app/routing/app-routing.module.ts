import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsResolverService } from '../components/products-resolver.service';


const routes: Routes = [
  {
    path: '',  
     loadChildren: () => import('../components/home/home.module').then(m => m.HomeModule)   
   },
  {
    path: 'about-us',  
     loadChildren: () => import('../components/about-us/about-us.module').then(m => m.AboutUsModule)   
   },
   {
    path: 'our-team',  
     loadChildren: () => import('../components/our-team/our-team.module').then(m => m.OurTeamModule)   
   },
   {
    path: 'our-services',  
     loadChildren: () => import('../components/our-services/our-services.module').then(m => m.OurServicesModule)   
   },
   {
    path: 'blog',  
     loadChildren: () => import('../components/blog/blog.module').then(m => m.BlogModule),
     resolve: { products: ProductsResolverService }   
   },
   {
    path: 'contact-us',  
     loadChildren: () => import('../components/contact-us/contact-us.module').then(m => m.ContactUsModule)   
   },
   {
    path: 'bmi-calculator',  
     loadChildren: () => import('../components/bmi-calculator/bmi-calculator.module').then(m => m.BmiCalculatorModule)   
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
