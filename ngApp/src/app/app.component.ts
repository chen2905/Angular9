import { Component } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'ngApp';
  strQuery :string = ""

  constructor(private serializer:UrlSerializer,private router:Router){
    const tree = router.createUrlTree([], { queryParams: { name: 'Chen', country: 'Australia' } });
  this.strQuery="query-parameter-route"+serializer.serialize(tree); // "/?foo=a&bar=42"
  console.log (this.strQuery)
  }
}
