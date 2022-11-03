
export function throttle(fn:Function,delay:number){
    
    let timer:any = null;
    let argss:any[] =[];
    return function(...args:any[]){
        argss = args;
        if(timer)return null;
        
        timer = setTimeout(() => {
            fn(...args);
            timer = null;
        },delay);
    }
}