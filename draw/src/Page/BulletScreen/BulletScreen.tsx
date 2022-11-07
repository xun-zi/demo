import './BulletScreen.scss'
import ProgressBar from './ProgressBar/ProgressBar'


export default function BulletScreen(){

    return (<div className='BulletScreen'>
        <div className='content'></div>
        <div className='bottom'>
            <ProgressBar/>
        </div>
    </div>)
}