import { NavBar,Image } from 'antd-mobile';
import { AddCircleOutline, SmileOutline, SoundOutline } from 'antd-mobile-icons';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { throttle } from  '../../../utils/utils';
import './WxSingleChat.scss';
let src = 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60';
type MesProps = {
    image:string,
    name:string,
    isMy:boolean,
    Message:string
};
function Mes(e:MesProps){
    const {image,name,isMy,Message} = e;
    return (<div className='Mes' style={isMy ? {flexDirection:'row-reverse'} : {}}>
        <Image src={image} width='45px' height='45px' style={isMy ? {borderRadius:'3px'} : {}}></Image>
        <div style={{padding:'0 5px'}} >
            <div className='name' style={isMy ? {textAlign:'right'} :{}}>{name}</div>
            <div className='text' style={isMy ? {backgroundColor:'rgb(137,217,97)'} :{}}>{Message}</div>
        </div>
    </div>)
}

const dock:MesProps[] = [{
    image:src,
    name:'zsc',
    isMy:false,
    Message:'1111'
},{
    image:src,
    name:'zsc',
    isMy:true,
    Message:'呀'
},{
    image:src,
    name:'zsc',
    isMy:false,
    Message:'1111'
},{
    image:src,
    name:'zsc',
    isMy:true,
    Message:'呀'
},{
    image:src,
    name:'zsc',
    isMy:false,
    Message:'1111'
},{
    image:src,
    name:'zsc',
    isMy:true,
    Message:'呀'
},{
    image:src,
    name:'zsc',
    isMy:false,
    Message:'1111'
},{
    image:src,
    name:'zsc',
    isMy:true,
    Message:'呀'
},{
    image:src,
    name:'zsc',
    isMy:false,
    Message:'1111'
},{
    image:src,
    name:'zsc',
    isMy:true,
    Message:'呀'
},{
    image:src,
    name:'zsc',
    isMy:false,
    Message:'1111'
},{
    image:src,
    name:'zsc',
    isMy:true,
    Message:'呀'
}]

export default function WxSingleChat() {
    const content = useRef<HTMLDivElement>(null);
    const [messages,setMessages] = useState<MesProps[]>(dock);
    useLayoutEffect(() => {
        const contCur = content.current;
        if(contCur)contCur.scrollTop = 100000;
        if(contCur){
            contCur.addEventListener('scroll',function(){
                const handle = throttle(() => {
                    if(!this.scrollTop){
                        const H = this.scrollHeight;
                        setMessages((oldData) => {
                            console.log(1)
                            return [...dock,...oldData];
                        });
                        console.log('scrollHeight1',this.scrollHeight,H);
                        this.scrollTop = 1000;
                        console.log(messages);
                    }
                },3000);
                handle();
            })
        }
    },[])
    return (<div className='WxSingleChat'>
        <NavBar back="返回" backArrow={true} className="top">我的好友</NavBar>
        <div className='content' ref={content}>
            {
                messages.map(({image,name,isMy,Message},index) => {
                    return (<Mes image={image} name={name} isMy={isMy}  Message={Message} key={index} />)
                })
            }
            
        </div>

        <div className='bottom'>
            <SoundOutline />
            <input className="sendMes"></input>
            <SmileOutline />
            <AddCircleOutline />
        </div>
    </div>)
}