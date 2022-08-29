import { Component, OnInit } from '@angular/core';
declare const  AUIGrid :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'Skinet';

  ngOnInit(): void {
    let data = [
      {
        userID: '123',
        userName: 'Nguyen Tien',
        gender: 'Female',
        departmentID:'DDROOPPO',
        birthday:"17/05/1994",
        email:"nguyenquocvu.16494@gmail.com",
        phone:'0902816494',
        role:'Reader'
  
      },
      {
        userID: '456',
        userName: 'Nguyen Vu',
        gender: 'Male',
        departmentID:'DDR',
        birthday:"04/06/1993",
        email:"nguyenquocvu.16494@gmail.com",
        phone:'0902816494',
        role:'Writer'
  
      },
      
    ];
  // tạo tiêu đề
    let configCol = [
      {
        headerText : "User ID",
        dataField : "userID",
        width : 120
       },
       {
      headerText : "User Name",
      dataField : "userName",
      width : 120
         },
      {
      headerText : "Gender",
      dataField : "gender",
      width : 60
      },
      {
        headerText : "Department ID",
        dataField : "departmentID",
        width : 120
      },		
      {
        headerText : "Birthday",
        dataField : "birthday",
        width : 120
      },
      {
        headerText : "Email",
        dataField : "email",
        width : 200
      },
      {
        headerText : "Phone",
        dataField : "phone",
        width : 120
      },
      {
        headerText : "Role",
        dataField : "role",
        width : 120
      },		
    ];
    //PROPERTIES của column
    let grirdProperties = {
      headerHeight: 50,
      softRemoveRowMode: false
    }

    AUIGrid.create("#myGrid", configCol, grirdProperties);
    AUIGrid.setGridData('#myGrid', data);
    AUIGrid.bind('#myGrid', "cellClick", function( event :any) {
      console.log('Cell Click', event)
    })
    

  }


}
