import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css'],
})
export class NavabarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).on('scroll', function (e: any) {
      $(document).scrollTop() > 70
        ? $('.navbar').css('background-color', 'rgba(255,255,255,'+$(document).scrollTop() * 50 +')')
        : $('.navbar').css('background-color', 'rgba(255,255,255,'+$(document).scrollTop() / 50 +')')
    });
  }
}
