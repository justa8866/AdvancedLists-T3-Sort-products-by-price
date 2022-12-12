import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'sorted-products', component: SortedProductListComponent }]), SortedProductListComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
