import { Component, signal } from '@angular/core';
import { ProductResponse } from './models/product';
import { Category } from './models/category';
import { Navbar } from './navbar/navbar';
import { Footer } from "./footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Footer, RouterOutlet],
})
export class App {
}
