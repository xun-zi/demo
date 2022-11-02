import './DragPicture.scss'
import React, { useEffect, useState } from 'react';
const arrdef: number[] = [];
for (let i = 0; i < 16; i++)arrdef.push(i);
let start = 0;
export default function DragPicture() {

    useEffect(() => {
    }, [])

    const [arrEl, setArrEl] = useState<number[]>(arrdef);
    return (<div className='DragPicture'>
        <div className='container'>
            {
                arrEl.map((num, index) => {
                    const [isAct, setIsAct] = useState<boolean>(false);
                    return (<div className='ElOut' key={index}>
                        <div className={isAct ? 'El--active' : 'El'} draggable='true'
                            onDragStart={function (e) {
                                start = index
                                setIsAct(true)
                            }}
                            onDragEnd={
                                function (e) {
                                    setIsAct(false);
                                }
                            }
                            onDrop={
                                function (event) {
                                    event.preventDefault();
                                    setArrEl((state) => {
                                        const temp = [...state];
                                        temp[start] = state[index];
                                        temp[index] = state[start];
                                        return temp;
                                    })
                                }
                            }
                            onDragOver={(event) => {
                                event.preventDefault();
                            }}
                        >
                            {num}
                        </div>
                    </div>)
                })
            }
        </div>
    </div>)
}