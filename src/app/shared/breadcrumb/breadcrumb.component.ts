import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterModule,CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() pageTitle: string = '';
  @Input() breadcrumbs: Breadcrumb[] = [];

  queryParams: Params = {};
  fullPath: string = '';
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
       this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.fullPath = this.router.url.split('?')[0]; // path without query
        this.queryParams = this.route.snapshot.queryParams;

        // Auto-generate breadcrumbs if not provided
        if (this.breadcrumbs.length === 0) {
          this.breadcrumbs = this.buildAutoBreadcrumbs(this.route.root);
        }
      });
  }


    private buildAutoBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (let child of children) {
      if (child.snapshot.routeConfig && child.snapshot.routeConfig.path) {
        url += `/${child.snapshot.url.map(segment => segment.path).join('/')}`;
        const label = child.snapshot.data['breadcrumb'] || child.snapshot.routeConfig.path;
        if (label) {
          breadcrumbs.push({ label, url });
        }
      }
      return this.buildAutoBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  addQueryParam(key: string, value: string) {
    this.queryParams[key] = value;
    this.router.navigate([], {
      queryParams: this.queryParams,
      queryParamsHandling: 'merge'
    });
  }


}
