import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';



import { MatTableDataSource, MatSort } from '@angular/material';
// import {MatTableModule} from '@angular/material/table';
import { map } from 'rxjs/operators';
import {EmployeeData} from '../model/employee';
import {EmployeeService} from '../services/employee.service';
// import {EmpDetailsComponent} from '../emp-details/emp-details.component';


import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput'


/*
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid'
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
*/



@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {
  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
  @ViewChild('myWindow', { static: false }) myWindow: jqxWindowComponent;
  @ViewChild('firstname', { static: false }) firstname: jqxInputComponent;
  @ViewChild('lastname', { static: false }) lastname: jqxInputComponent;
  @ViewChild('dob', { static: false }) dob: jqxInputComponent;
  @ViewChild('perm_Address', { static: false }) perm_Address: jqxInputComponent;
  @ViewChild('curnt_Address', { static: false }) curnt_Address: jqxInputComponent;
  @ViewChild('department', { static: false }) department: jqxInputComponent;
  @ViewChild('training_attnd', { static: false }) training_attnd: jqxInputComponent;
  @ViewChild('phoneno', { static: false }) phoneno: jqxNumberInputComponent;
  @ViewChild('beginEdit', { static: false }) beginEdit: ElementRef;
    @ViewChild('endEdit', { static: false }) endEdit: ElementRef;
  dataSource:EmployeeData;
  
  errorMessage:string;
  url:string


source=   {
          
  datatype: 'json',
  datafields: [
    { name: 'id', type: 'int' },
      { name: 'firstname', type: 'string' },
      { name: 'lastname', type: 'string' },
      { name: 'dob', type: 'string' },
      { name: 'permanentaddress', type: 'string' },
      { name: 'currentaddress', type: 'string' },
      { name: 'department', type: 'string' },
      { name: 'phonenumber', type: 'int' },
      { name: 'trainingattended', type: 'string' },

  ],
  
  url:'http://localhost:8080/spring_crud/api/employee'
  
};


  constructor(private _employeeService:EmployeeService) {

    
   }

  ngOnInit() {
    // this.source['url'] =this._employeeService.url
   
  }



  addNewEntry(){
    
    this.myWindow.position({ x: 68, y: 368 });
    this.myWindow.open();
  }
  

    

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    // cellsrenderer:any = (row: number): string => {
     
    //   // console.log(this.dataAdapter.records[row].empid)
    //     var empid = this.dataAdapter.records[row].empid;
    //     // return '<a href="http://www.google.com">'+empid+'</a>'
    //   //  return '<a href="/employeeDetails">'+empid+'</a>'
    //    return `<a href="/employeeDetails/${empid}">`+empid+'</a>'

      
        
    // };

    columns: any[] =
    [
        { text: 'First Name', columngroup: 'EmployeeDetails', datafield:'firstname' , width: 100 },
        { text: 'Last Name', columngroup: 'EmployeeDetails', datafield: 'lastname', cellsalign: 'right', align: 'right',width: 100  },
        { text: 'Dob', columngroup: 'EmployeeDetails', datafield: 'dob', align: 'right', cellsalign: 'right',width: 100  },
        { text: 'Permanent Address', columngroup: 'EmployeeDetails',datafield: 'permanentaddress', align: 'right',cellsalign: 'right', width: 100 },
        { text: 'Current Address', columngroup: 'EmployeeDetails', datafield: 'currentaddress', align: 'right',cellsalign: 'right' ,width: 100 },
        { text: 'Department', columngroup: 'EmployeeDetails', datafield: 'department', align: 'right',cellsalign: 'right',width: 100 },
        { text: 'Phonenumber', columngroup: 'EmployeeDetails', datafield: 'phonenumber', align: 'right',cellsalign: 'right',width: 100 },
        { text: 'Training Attended', columngroup: 'EmployeeDetails', datafield: 'trainingattended', align: 'right',cellsalign: 'right',width: 100 },
        {
           datafield: '    ', columntype: 'button',columngroup: 'EmployeeDetails',
          cellsrenderer: (): string => {
  
       
              return 'Delete';
          },
          buttonclick: (row: number): void => {
          // console.log()
           
           var z = this.dataAdapter.records[row]
           console.log(z)
            var x = z.id;
            var y = z.firstname;
            // alert("value is"+x)
            confirm("Are you Sure to Delete Entry of : "+y+'?')
            this._employeeService.deleteEmployee(x)
            .subscribe({
              error: err => this.errorMessage = err
              });
              
              window.location.reload();
          }
          }
    ];
    


    columngroups: any[] =
    [
        { text: 'Employee Details', align: 'center', name: 'EmployeeDetails' }
    ];

    myGridOnCellBeginEdit(event: any): void {
      // console.log(event)
      // console.log(event.args.row)
     // let args = event.args;
     // this.beginEdit.nativeElement.innerHTML = 'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
      // console.log(args+" "+args.value);
      // console.log(args.value.toString())
    
  }


  myGridOnCellEndEdit(event: any): void{
    // console.log(event.args)
    // console.log(event.args.row);
    let id = event.args.row['empid'];
    console.log(id)
    //mapping row elements 

    let rowData =  event.args.row;

    this.dataSource={'id':rowData['id'],'firstname':rowData['firstname'],'lastname':rowData['lastname'],'dob':rowData['dob'],'permanentaddress':rowData['permanentaddress'],'currentaddress':rowData['currentaddress'],'department':rowData['department'],'phonenumber':rowData['phonenumber'],'trainingattended':rowData['trainingattended']};
    
    
  

      this._employeeService.updateEmployee(this.dataSource).subscribe();
      //alert("update successful")
      // this.endEdit.nativeElement.innerHTML = 'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
  }


  saveBtn(): void {
        
            let row =
                {
                    firstname: this.firstname.val(),
                    lastname: this.lastname.val(),
                   dob: this.dob.val(),
                   
                };
                console.log(row)
                  //the id will be auto generated backend
               this.dataSource={'id': 0,'firstname':this.firstname.val(),'lastname':this.lastname.val(),'dob':this.dob.val(),'permanentaddress':this.perm_Address.val(),'currentaddress':this.curnt_Address.val(),'department':this.department.val(),'phonenumber':this.phoneno.val(),'trainingattended':this.training_attnd.val()};
           this._employeeService.addEmployee(this.dataSource).subscribe()
           // this.myGrid.updaterow(rowID, row);
            this.myWindow.hide();
        
    }
    cancelBtn(): void {
        this.myWindow.hide();
    }

  

}
