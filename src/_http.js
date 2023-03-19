import axios from 'axios';
class $Http {
 constructor(options) {
   this.instance = axios.create({
     baseURL: options?.baseURL ?? '',
     headers: options?.headers ?? {},
     params: options?.params ?? {},
   });
 }
 get = async (resource, params) => this.instance.get(resource, { params });
 // другие методы класса, интерцепторы и т.д.
}
export default $Http;