import { Injectable } from '@angular/core';
import {EmployeeData} from '../model/employee';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // url='http://localhost:3000/employees';
  url = 'http://localhost:8080/spring_crud/api/employee'
  constructor(private _http:HttpClient) { 
  }

  
  public getEmployees():Observable<EmployeeData[]>{
    return this._http.get<EmployeeData[]>(this.url);
  }


  public addEmployee(employeedata:EmployeeData):Observable<EmployeeData>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
  
    return this._http.post<EmployeeData>(this.url,employeedata,{headers})
  
  }

  // public getEmployee(empid:string):Observable<EmployeeData>{
  //   return this._http.get<EmployeeData>(this.url+'/'+`${empid}`);
  // }

  public updateEmployee(employeedata:EmployeeData):Observable<EmployeeData>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.put<EmployeeData>(this.url+'/'+`${employeedata.id}`,employeedata,{headers})
  
  }


  public deleteEmployee(id:number):Observable<{}>{
    console.log("welcome to delete")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = this.url+'/'+`${id}`;
    
    return this._http.delete<EmployeeData>(url, { headers })
  }






  
}
