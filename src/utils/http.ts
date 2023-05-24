const BASE_URL = "http://www.pudge.wang:4000"
const http = {
    get(url:string,params:any){
        if(params){
            const arr = Object.keys(params);
            const arr2 = arr.map((item:string)=>item + "=" + params[item]);
            const str = "?" + arr2.join("&")
            url += str
        }
        return fetch(BASE_URL + url)
          .then((response)=>response.json())
          .then((res)=>{
            if(res.status === "0"){
                return res
            }
          })
    },
    post(url:string,data:Object){
        return fetch(BASE_URL + url,{
          method:"post",
          headers:{
            "content-type":"application/json",
          },
          body:JSON.stringify(data),
        })
          .then((response)=>{
            return response.json()
          })
          .then((res)=>{
            if(res.status === "0"){
                return res
            }
          })
    }
}