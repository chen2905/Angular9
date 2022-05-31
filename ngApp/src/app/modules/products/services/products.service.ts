import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  createProduct(productBody: any): Observable<Product> {
    const _url = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(_url, productBody);
  }

  updateProduct(productId: any, productBody: any): Observable<Product> {
    const _url = 'http://localhost:3000/products/' + productId;
    return this.httpClient.put<Product>(_url, productBody);
  }

  getAllProducts(): Observable<Product> {
    const _url = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(_url);
  }
  getAllCategories(): Observable<Category> {
    const _url = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(_url);
  }

  viewProduct(productId: any): Observable<Product> {
    const _url = 'http://localhost:3000/products/' + productId;
    return this.httpClient.get<Product>(_url);
  }

  deleteProduct(productId: any): Observable<Product> {
    const _url = 'http://localhost:3000/products/' + productId;
    return this.httpClient.delete<Product>(_url);
  }

  searchProductByCategory(categoryId: any): Observable<Product> {
    const _url = 'http://localhost:3000/products?categoryId=' + categoryId;
    return this.httpClient.get<Product>(_url);
  }

  searchProductByDate(dateParam: any): Observable<Product> {
    const _url = 'http://localhost:3000/products/date=' + dateParam;
    return this.httpClient.get<Product>(_url);
  }


}
