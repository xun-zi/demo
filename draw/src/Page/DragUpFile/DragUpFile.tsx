import { useState } from 'react';
import './DragUpFile.scss'


export default function () {
    const [text,setText] = useState<string>('');
    return (<div className='DragUpFile'
    >
        <div className='container'
            onDragEnter={(e) => { e.preventDefault(); e.stopPropagation() }}
            onDragOver={(e) => { e.preventDefault(); e.stopPropagation() }}
            onDrop={e => {
                e.preventDefault();
                const files = e.dataTransfer.files;
                setText(files[0].name);
                console.log(files)
            }}
        >
            <h1>{text == '' ? '请将文件拖入到白色方框内' : '拖入成功'}</h1>
            <p>{text}</p>
        </div>
    </div>)
}