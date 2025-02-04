import { Component } from '@angular/core';
import {
  MatButtonToggleModule,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';

@Component({
  selector: 'app-homework-helper',
  standalone: true,
  imports: [MatButtonToggleModule, MatButtonToggleGroup],
  templateUrl: './homework-helper.component.html',
  styleUrl: './homework-helper.component.scss',
})
export class HomeworkHelperComponent {}
