import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(()=> {
      $(".horizontal-tabs-steps .nav-link").click(()=> {
        $(this).parent().prevAll().children('.horizontal-tabs-steps .nav-link').addClass('checked-steps');
        $(this).parent().nextAll().children('.horizontal-tabs-steps .nav-link').removeClass('checked-steps');
        $(this).removeClass('checked-steps');
        $(this).parent().removeClass('complete-step');
        $(this).parent().nextAll().removeClass('complete-step');
        $(".horizontal-tabs-steps .nav-link.checked-steps").parent().addClass('complete-step');
      });
    });
  }

}
