declare const hostInfo: any;

declare module "@bairong/login-form";

//接口返回数据格式
interface IRequest {
  url: string;
  data: any;
  error: string;
  method?: "get" | "post" | "jsonp";
  headers: any;
}
