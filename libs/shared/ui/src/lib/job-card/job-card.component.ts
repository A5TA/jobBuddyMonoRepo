import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'lib-job-card',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent {
  @Input() jobRole!: string;
  @Input() jobCompany!: string;
 
  @Input() jobPay!: number;
  @Input() jobLocation!: string;
  
  applicants: number = 12;
  daysAgo: number = 2;
  jobType: string[] = ['Fulltime', 'Remote', 'Entry-level'];

  jobTypesShown = 2;


  showMoreJobInfo() {
    console.log("Clicked");
    this.jobTypesShown = this.jobType.length;
  }
}
