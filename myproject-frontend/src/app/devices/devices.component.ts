import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DevicesComponent implements OnInit {
  devices: any[] = [];
  types: any[] = [];
  newDevice = { nombre: '', precio: 0, ubicacion: '', id_tipo: 1 };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDevices().subscribe(data => {
      this.devices = data;
    });
    this.dataService.getTypes().subscribe(data => {
      this.types = data;
    });
  }

  addDevice(): void {
    this.dataService.addDevice(this.newDevice).subscribe({
      next: (response) => {
        console.log('Device added', response);
        this.devices.push(this.newDevice);
        this.newDevice = { nombre: '', precio: 0, ubicacion: '', id_tipo: 1 };
      },
      error: (err) => console.error(err)
    });
  }
}