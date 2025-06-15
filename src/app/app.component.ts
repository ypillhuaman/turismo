import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';

interface City {
    name: string;
    code: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            CommonModule,
            FormsModule,
            MenubarModule,
            InputGroupModule,
            InputTextModule,
            ButtonModule,
            DropdownModule,
            CalendarModule,
            CardModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'appAgendaCultural';
  items: MenuItem[] | undefined;

  departamentos: City[] | undefined;
  provincias: City[] | undefined;
  selectedDep: City | undefined;
  selectedProv: City | undefined;

  date: Date | undefined;

  images: any = []

  provinciasData = [
    { code: "LI-LM", name: "Lima", "pkcode": 'LIM' },
    { code: "AR-AY", name: "Arequipa", "pkcode": 'AR' },
    { code: "LI-LI", name: "Trujillo", "pkcode": "LI" },
    { code: "CU-CU", name: "Cuzco", "pkcode": "CU" },
    { code: "PI-PI", name: "Piura", "pkcode": "PI" },
    { code: "LA-CH", name: "Chiclayo", "pkcode": "LA" },
    { code: "SM-MO", name: "Moyobamba", "pkcode": "SM" },
    { code: "PA-PAS", name: "Pasco", "pkcode": "PA" },
    { code: "UC-UCA", name: "Yurimaguas", "pkcode": "UC" }
  ]

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },            
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ]

    this.departamentos = [
      { code: "LIM", name: "Lima" },
      { code: "AR", name: "Arequipa" },
      { code: "LI", name: "La Libertad" },
      { code: "CU", name: "Cuzco" },
      { code: "PI", name: "Piura" },
      { code: "LA", name: "Lambayeque" },
      { code: "SM", name: "San Martín" },
      { code: "PA", name: "Pasco" },
      { code: "UC", name: "Ucayali" },
      { code: "AM", name: "Amazonas" }
    ]
    this.provincias = [];
  }

  onChange(event: any) {
    this.provincias = this.provinciasData.filter(item => item.pkcode == event.value.code);
  }

  onClick() {
    console.log('search');
    this.images = [
    'assets/image1.png',
    'assets/image2.png',
    'assets/image3.png',
    'assets/image4.png',
    'assets/image5.png',
    'assets/image6.png',
  ];
  }
}
