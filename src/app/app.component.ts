import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../Pages/home/home.component';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './Components/header/header.component';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, BaseChartDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'project-test';
  ngOnInit(): void {
    initFlowbite();
  }
}