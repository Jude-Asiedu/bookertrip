import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SharedModule } from '../../../shared/shared.module';
import { isPlatformBrowser } from '@angular/common';

Chart.register(...registerables)

@Component({
  selector: 'app-dashboard',
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  // Version 2
  @ViewChild('salesChart') salesChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('visitorsChart') visitorsChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('revenueChart') revenueChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('trafficChart') trafficChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('userGrowthChart') userGrowthRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('weatherChart') weatherRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('stockChart') stockRef!: ElementRef<HTMLCanvasElement>;
  isBrowser!: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object){
     this.isBrowser = isPlatformBrowser(this.platformId);
  }
   ngAfterViewInit() {
    // Sales Chart V1
    // new Chart('salesChart', {
    //   type: 'line',
    //   data: {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    //     datasets: [{
    //       label: 'Sales ($)',
    //       data: [1200, 1900, 3000, 2500, 3200, 4000],
    //       borderColor: 'rgba(75, 192, 192, 1)',
    //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //       tension: 0.3
    //     }]
    //   }
    // });

    // // Users Chart
    // new Chart('usersChart', {
    //   type: 'bar',
    //   data: {
    //     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //     datasets: [{
    //       label: 'Users',
    //       data: [200, 300, 400, 350, 500, 450, 600],
    //       backgroundColor: 'rgba(153, 102, 255, 0.5)',
    //       borderColor: 'rgba(153, 102, 255, 1)',
    //       borderWidth: 1
    //     }]
    //   }
    // });

    // V2
    if (isPlatformBrowser(this.platformId)) {
    this.loadSalesChart();
    this.loadVisitorsChart();
    this.loadRevenueChart();
    this.renderTrafficChart()
    this.createUserGrowthChart();
    this.createStockChart();
    this.createWeatherChart();}
  }



  renderTrafficChart() {
    new Chart(this.trafficChartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Direct', 'Social', 'Organic', 'Referral'],
        datasets: [{
          label: 'Traffic',
          data: [300, 200, 400, 100],
          backgroundColor: ['#0d6efd', '#6f42c1', '#fd7e14', '#198754']
        }]
      }
    })}


  loadSalesChart() {
    new Chart(this.salesChart?.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: [120, 190, 300, 250, 200, 300],
          backgroundColor: '#4e73df'
        }]
      },
      options: { responsive: true }
    });
  }


  loadVisitorsChart() {
    new Chart(this.visitorsChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Visitors',
          data: [200, 250, 300, 400, 350, 500, 450],
          borderColor: '#1cc88a',
          fill: false,
          tension: 0.3
        }]
      },
      options: { responsive: true }
    });
  }

  loadRevenueChart() {
    new Chart(this.revenueChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [{
          data: [55, 25, 20],
          backgroundColor: ['#36b9cc', '#f6c23e', '#e74a3b']
        }]
      },
      options: { responsive: true }
    });
  }

    createUserGrowthChart() {
    new Chart(this.userGrowthRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Users',
          data: [200, 450, 700, 900, 1200],
          borderColor: '#1cc88a',
          fill: false
        }]
      }
    });
  }

  createWeatherChart() {
    new Chart(this.weatherRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Temperature (°C)',
          data: [22, 25, 27, 26, 24, 28, 30],
          borderColor: '#f6c23e',
          backgroundColor: 'rgba(246, 194, 62, 0.2)',
          fill: true
        }]
      }
    });
  }

  createStockChart() {
    new Chart(this.stockRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM'],
        datasets: [{
          label: 'Stock Price',
          data: [120, 125, 123, 128, 127, 130],
          borderColor: '#e74a3b',
          backgroundColor: 'rgba(231, 74, 59, 0.2)',
          fill: true
        }]
      }
    });
  }
}
