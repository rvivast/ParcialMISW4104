import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleService } from 'src/app/services/vehicle.service';
import { faker } from '@faker-js/faker';
import { VehicleComponent } from './vehicle.component';
import { Vehicle } from 'src/app/models/vehicle';
import { By } from '@angular/platform-browser';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleComponent ],
      imports: [HttpClientModule],
      providers: [VehicleService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;

    component.listVehicles = Array.from({length: 3}, () =>{
      const id = parseInt(faker.random.numeric());
      const marca = faker.name.firstName(); 
      const linea = faker.commerce.productName();
      const referencia = faker.company.name();
      const modelo = parseInt(faker.random.numeric());
      const kilometraje = parseInt(faker.random.numeric());
      const color = faker.color.human();
      const imagen = faker.image.imageUrl();

      return new Vehicle(id,marca,linea,referencia,modelo,kilometraje,color,imagen);
    })

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 tr elements', () => {
    expect(debug.queryAll(By.css('.filas'))).toHaveSize(3);
  });

  it('should create table element', () => {
    expect(debug.queryAll(By.css('.table'))).toHaveSize(1);
  });

  it('should create thead element', () => {
    expect(debug.queryAll(By.css('.table-dark'))).toHaveSize(1);
  });

});
