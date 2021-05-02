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
    $(()=>{
      $('.btn-circle').on('click',()=>{
        $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
        $(this).addClass('btn-info').removeClass('btn-default').blur();
      });
     
      $('.next-step, .prev-step').on('click', function (e:any){
        var $activeTab = $('.tab-pane.active');
     
        $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
     
        if ( $(e.target).hasClass('next-step') )
        {
           var nextTab = $activeTab.next('.tab-pane').attr('id');
           $('[href="#'+ nextTab +'"]').addClass('btn-info').removeClass('btn-default');
           $('[href="#'+ nextTab +'"]').tab('show');
        }
        else
        {
           var prevTab = $activeTab.prev('.tab-pane').attr('id');
           $('[href="#'+ prevTab +'"]').addClass('btn-info').removeClass('btn-default');
           $('[href="#'+ prevTab +'"]').tab('show');
        }
      });
     });
  }

}
