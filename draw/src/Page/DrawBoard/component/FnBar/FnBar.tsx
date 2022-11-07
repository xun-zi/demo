import { HighlightOutlined } from '@ant-design/icons'
import './FnBar.scss'

export default function FnBar() {

    return (<ul className='FnBar'>
        <li>
            <HighlightOutlined style={{ fontSize: '32px' }} />
        </li>
        <li>
            <HighlightOutlined style={{ fontSize: '32px' }} />
        </li>
    </ul>)
}