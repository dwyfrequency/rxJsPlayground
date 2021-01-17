import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchService } from './service/fetch.service';
import { Post } from './shared/post';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxJsPlayground';
  posts$: Observable<Post[]> = this.fetchService.getPosts();

  // post$: Observable<string> = this.fetchService.getPost(1).pipe(map(x => `${x.id}: ${x.body}`));

  constructor(private fetchService: FetchService) {}

  ngOnInit() {
  }
}
