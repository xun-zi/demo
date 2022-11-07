import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons'
import { useEffect, useRef, useState } from 'react'
import './ProgressBar.scss'
// ::before生成的伪元素默认是行样式
const totel = 300;
let timer: any = null;
export default function ProgressBar() {
    const { time } = { time: 300 }
    const [isPause, setIsPause] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(288)
    const bsSaver = useRef(() => {});
    bsSaver.current = () => {
        if(isPause) return;
        console.log(progress,totel);
        if (progress >= totel) {
            setIsPause(true);
            return;
        }
        setProgress(state => state + 1);
    }
    useEffect(() => {
        if(timer)return;
        timer = setInterval(() => {
            bsSaver.current();
        }, 1000);
    }, [])
    return (<div className="ProgressBar">
        {/* 进度条 */}
        <div className='bar'>
            <div className='progress' style={{ width: `${progress / totel * 100}%` }}></div>
        </div>
        {/* 按键 */}
        <div className='fn'>
            <div className='switch' onClick={() => setIsPause(state => { console.log(state); return !state; })}>
                {isPause ? <CaretRightOutlined /> : <PauseOutlined />}
            </div>
            <p className='progressShow'>{`${progress}/${totel}`}</p>
        </div>
    </div>)
}