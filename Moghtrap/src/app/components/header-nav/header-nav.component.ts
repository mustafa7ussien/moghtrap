import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  
  constructor( private _rout:Router,private _router:ActivatedRoute) { }
  
  
  toggleIcon(){
    
  }
  ngOnInit(): void {
    var icon=document.getElementById('icon');
    var links=document.getElementById('links');
    var navbar=document.querySelector('nav');
    icon.onclick=function(){
      links.classList.toggle('toggle')
    }
    // fixed navbar
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 763) {
      navbar.classList.add("fixed");
  } else {
      navbar.classList.remove("fixed");
  }
});
  }

}
