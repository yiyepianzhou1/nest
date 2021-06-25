// 装饰器1给类原型增加方法
function sealed(params) {
  params.prototype.url = 'xxxxx';
}

@sealed
class Greeter {
  constructor() {}
}
const a: any = new Greeter();
console.log(a.url);
// function logCla(params: string) {
//   console.log(params);
//   return function (target: any) {
//     target.prototype.url = '11111';
//   };
// }

// @logCla('测试')
// class HttpClient {
//   constructor() {}
// }

// const a: any = new HttpClient();
// console.log(a.url);

// function LogCla(target: any) {
//   return class extends target {
//     url = '测试111';
// 	http: '11111111';
//     getData() {
//       console.log(this.url);
//     }
//   };
// }

// @LogCla
// class HttpClient {
//   url: string | number;
//   constructor() {
//     this.url = 'init url';
//   }
// 	http = ''
//   getData() {
//     console.log(this.url);
//   }
// }

// const http = new HttpClient();
// console.log(http.http)
// http.getData();

// function fn<T extends { new (...args: any): {} }>(constructor: T): T {
//   class Ps extends constructor {
//     age = 20;
//   }
//   return Ps;
// }
// @fn
// class Person {
//   url = '121212';
// }
// const p: any = new Person();
// console.log(p);
