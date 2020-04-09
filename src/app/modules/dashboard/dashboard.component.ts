import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TrainingService } from 'src/app/_services/training.service';
import { InstitutionRateService } from 'src/app/_services/institution-rate.service';
import { InstitutionRate } from 'src/app/models/InstitutionRate';
import { ThrowStmt } from '@angular/compiler';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pieChart = [];
  card = [];
  nombreCourse: any;
  number: number;
  sumPrix: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  work: 0;
  property: 0;
  equipment: 0;

  constructor(private dashboardService: DashboardService,
    private trainingService: TrainingService,
    private instituService: InstitutionRateService,
  ) { }
  institutionRate: any;

  ngOnInit() {
    // this.countCourse();
    this.countCourse();
    this.bigChart();
   
    this.cards();
    this.dataSource.paginator = this.paginator;
  }
  cards() {
    return this.card = [100, 2, 39, 66];
  }

bigChart(){
  this.pieChart = [{
    name: 'Kidness',
    data: [this.work , this.equipment , this.property ],
   
    //data: [1, 1402, 3634, 5268]

  }
 

  ];
  console.log(this.pieChart);
}

  countCourse() {
    this.trainingService.countTraining().subscribe(
      data => {
        this.nombreCourse = data;
        this.trainingService.countPrice().subscribe(
          data => {
            this.sumPrix = data;

          });
      });

    this.instituService.countrate().subscribe(
      x => {
        this.institutionRate = x;
        this.work = this.institutionRate.workspace;
        this.property = this.institutionRate.property;
        this.equipment = this.institutionRate.equipment;
        this.bigChart();
      }
    );
    
  

      this.instituService.count().subscribe(
        x => {
          
          console.log(x);
        }
        
        ); 


  }

}