import { Component, signal } from '@angular/core';
import { ProductResponse } from './models/product';
import { Category } from './models/category';
import { Navbar } from './navbar/navbar';
import { Footer } from "./footer/footer";
import { Product } from "./product/product";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Footer, Product, Home],
})
export class App {
}
