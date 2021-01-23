import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  onTestar(){
      Swal.fire({
        title:'Usando SweeAlert2',
        text:'Olá Mundo SweetAlert2!',
        showDenyButton:true,
        denyButtonText:'Não',
        confirmButtonText:'Sim',
        showLoaderOnConfirm:true,
        onOpen:()=>{
            const content = Swal.getContent();
            const header = Swal.getHeader();
            header.textContent = 'Manipulando Header do SweetAlert';
        },
        preConfirm:()=>{
          Swal.fire({
            title:'Outra SweetAlert',
            text:'Esta é outra SweetAlert...',
          });
        }
        });
  }
}