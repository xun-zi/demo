import { BorderOutlined, ClearOutlined, EditOutlined } from '@ant-design/icons';
import { Slider } from 'antd';
import { useRef, useState } from 'react';
import { cursorTo } from 'readline';
import FnBar from './component/FnBar/FnBar';
import './DrawBoard.scss';

type MousePos = {
    x: number,
    y: number
}

export default function DrawBoard() {
    const [isDown, setIsDown] = useState<boolean>(false);
    const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 })
    const [color, setColor] = useState<string>('#000000');
    const [size, setSize] = useState<number>(10);
    const [state, setState] = useState<string>('笔');
    const cav = useRef<HTMLCanvasElement>(null);
    const preImg = useRef<any>();
    const drawLine = function (x2: number, y2: number) {
        const ctx = cav.current?.getContext('2d');
        if (!ctx) {
            console.error('ctx不存在');
            return;
        }
        const { x, y } = mousePos;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        setMousePos({ x: x2, y: y2 });
        drawCircle(x2, y2);
    }

    function drawCircle(x: number, y: number) {
        const ctx = cav.current?.getContext('2d');
        if (!ctx) {
            console.error('ctx不存在');
            return;
        }
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }

    return (<div className='DrawBoard'>
        <div style={{ width: '1000px', position: 'relative' }}>
            <div className='right'>
                <Slider min={1} max={30} value={size} onChange={(val) => setSize(val)} style={{ width: '300px' }}></Slider>
                <input type="color" onChange={(e) => {
                    setColor(e.target.value);
                }} />
                <div style={{ fontSize: '32px' }}>
                    <ClearOutlined onClick={() => {
                        const ctx = cav.current?.getContext('2d');
                        if (!ctx) {
                            console.error('ctx不存在');
                            return;
                        }
                        ctx.clearRect(0, 0, 1000, 500)
                    }} />
                    <EditOutlined onClick={() => setState('笔')} />
                    <BorderOutlined onClick={() => setState('矩形')} />
                </div>
            </div>
            <canvas
                width='1000'
                height='500'
                className='canvas'
                ref={cav}
                onMouseDown={function (e) {
                    setIsDown(true);
                    const ctx = cav.current?.getContext('2d');
                    if (!ctx) {
                        console.error('ctx不存在');
                        return;
                    }
                    preImg.current = ctx.getImageData(0, 0, 1000, 500);
                    ctx.strokeStyle = color;
                    ctx.lineWidth = size * 2;
                    setMousePos({
                        x: e.nativeEvent.offsetX,
                        y: e.nativeEvent.offsetY
                    })
                }
                }
                onMouseMove={function (e) {
                    if (!isDown) return;
                    const El = e.nativeEvent;
                    if (state == '笔') drawLine(El.offsetX, El.offsetY);
                    else {
                        const ctx = cav.current?.getContext('2d');
                        if (!ctx) {
                            console.error('ctx不存在');
                            return;
                        }
                        ctx.putImageData(preImg.current, 0, 0);
                        const { x, y } = mousePos;
                        const [x2, y2] = [El.offsetX, El.offsetY];
                        ctx.strokeRect(x, y, x2 - x, y2 - y)
                    }
                }}
                onMouseUp={function () {
                    setIsDown(false);
                }}
                onMouseOut={function(){
                    setIsDown(false)
                }}
            ></canvas>
        </div>
    </div>)
}