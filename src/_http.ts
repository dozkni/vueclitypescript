import axios from 'axios';
class $Http {
 instance: any;
 constructor(options: { baseURL: any; headers: any; params: any; }) {
   this.instance = axios.create({
     baseURL: options?.baseURL ?? '',
     headers: options?.headers ?? {},
     params: options?.params ?? {},
   });
 }
 get = async (resource: any, params: any) => this.instance.get(resource, { params });
 // другие методы класса, интерцепторы и т.д.
}
export default $Http;