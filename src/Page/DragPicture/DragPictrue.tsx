import './DragPicture.scss'
import React, { useEffect, useState } from 'react';
const arrdef: number[] = [];
for (let i = 0; i < 16; i++)arrdef.push(i);
export default function DragPicture() {

    let enter = 0;
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
                                enter = index
                                setIsAct(true)
                            }}
                            onDragEnd={
                                function (e) {
                                    setIsAct(false);
                                    setArrEl((state) => {
                                        const temp = [...state];
                                        temp[enter] = state[index];
                                        temp[index] = state[enter];
                                        return temp;
                                    })
                                }
                            }
                            onDragEnter={
                                function () {
                                    enter = index
                                }
                            }
                            onDrop={
                                function(event){
                                    event.preventDefault();
                                    console.log(index);
                                }
                            }
                            onDragOver={() => {}}
                        >
                            {num}
                        </div>
                    </div>)
                })
            }
        </div>
    </div>)
}