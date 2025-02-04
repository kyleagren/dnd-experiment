import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeworkHelperComponent } from './homework-helper/homework-helper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeworkHelperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
