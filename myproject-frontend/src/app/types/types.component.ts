import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TypesComponent implements OnInit {
  types: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTypes().subscribe(data => {
      this.types = data;
    });
  }
}