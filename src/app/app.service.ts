import {Injectable} from '@angular/core'
import {Http, RequestOptions, Headers, RequestMethod} from '@angular/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TestService{

    constructor(private $http:Http ){

    }

    GetData() : Observable<user>{
        return this.$http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(map(res=>res.json()))
    }

    PostData(data):any{
        debugger
        let userdata  = JSON.stringify(data)
        let hdr = new Headers();
        let res = new RequestOptions({method:RequestMethod.Post});
        res.headers = new Headers()
        //res.headers.append('name','nishikant')
        res.headers.append('Content-Type','application/json')
        //this.$http.post('https://jsonplaceholder.typicode.com/posts',userdata,res).pipe(map(res=>{
       return this.$http.post('http://localhost:3000/users',JSON.stringify(data),res).pipe(map(res=>res.json()))

    }
}