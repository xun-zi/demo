import { useState } from 'react'
import './Login.scss'

export default function Login() {
    const [username, setUsername] = useState('11');
    const [password, setPassword] = useState('11');
    const [checkbox, setCheckbox] = useState(true);
    return (<div className="LoginPage">
        <div className='container'>
            <h1>学生登录</h1>
            <h3>请输入账号和密码</h3>
            <div className='from'>
                <input placeholder='账号' value={username} onChange={e => setUsername(e.target.value)}></input><br />
                <input placeholder='密码' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>

                <div className='ElVerCenter'>
                    <input type="checkbox" style={{ margin: 0 }} checked={checkbox} onChange={e => setCheckbox(e.target.checked)}/>
                    <p style={{fontSize:'9px'}}>记住密码</p>
                </div>

                <button className='LoginBtn'>登录</button>
            </div>
            <div style={{ paddingTop: '10px' }}>
                <p>注册</p>
            </div>
        </div>
    </div>)
}