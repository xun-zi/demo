import './index.scss'
import { SearchOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Space } from 'antd';
import { useState } from 'react';


export default function My() {
    const [person, setPerosn] = useState<number>(0);
    let username = '贪心的小马'
    let id = 'dy1dyijnj3u';
    const [tag, setTag] = useState<number>(0);
    return (<div className='My'>
        {/* 绝对定位 */}
        <div className='top'>
            {/* flex-direction:row-reverse */}
            <Button shape='circle' icon={<UnorderedListOutlined />} />
            <div className='space'></div>
            <Button shape="circle" icon={<SearchOutlined />} />
            <div className='space'></div>
            <Button shape="round" icon={<UserOutlined />}>新增用户{person}</Button>
        </div>
        <div className='ElVerCenter header'>
            <Avatar size={64} icon={<UserOutlined />} />
            <div className='space' />
            <div>
                <p className='username'>贪心的小马</p>
                <span>{'抖音号:' + id}</span>
            </div>
        </div>
        <div className='content'>
            <div className='praise'>
                <span><span className='num'>0</span>获赞</span>
                <span><span className='num'>10</span>关注</span>
                <span><span className='num'>11</span>粉丝</span>
            </div>
            <p style={{ margin: '0' }}>点击添加介绍让大家认识</p>
            <span style={{ backgroundColor: 'rgb(220,220,220)', marginRight: '20px', padding: '4px' }}>男</span>
            <span style={{ backgroundColor: 'rgb(220,220,220)', padding: '4px' }}>添加所在地，学校等标签</span>

            <div className='content-child2'>
                <button>编辑资料</button>
                <button>添加朋友</button>
            </div>

            <div className='content-child3'>
                {
                    ['作品', '私藏', '收藏', '喜欢'].map((s, index) => {
                        return (<div key={index} onClick={() => {
                            setTag(index);
                        }}>{s}</div>)
                    })
                }
                <div className='cont-son3' style={{ left: `${tag * 25}%` }}></div>
            </div>
            <div style={{ width: '100vw',overflow:'hidden',position:'relative',height:'30px',marginTop:'3px'}}>
                <div style={{display:'flex',flexWrap:'nowrap',flexGrow:'1',width:'400vw',position:'absolute',top:'0',left:`-${tag * 100}vw`}}>
                    <div style={{ width: '100vw', height: '30px', backgroundColor: 'red' }}></div>
                    <div style={{ width: '100vw', height: '30px', backgroundColor: 'green' }}></div>
                    <div style={{ width: '100vw', height: '30px', backgroundColor: 'blue' }}></div>
                    <div style={{ width: '100vw', height: '30px', backgroundColor: 'pink' }}></div>
                </div>
            </div>

        </div>
        <div className='footer'>

        </div>
    </div>)
}