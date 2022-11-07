import './BlibliPart.scss'
import { Carousel, Layout, Radio } from 'antd';
import carouselImg from './img/carousel/carousel';
const { Header, Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


export default function BlibliPart() {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (<div className='BlibliPart'>
        {/* <Carousel className='carousel' afterChange={onChange} autoplay dotPosition='bottom'>
                {
                    carouselImg.map((img, index) => {
                        return (<div>
                            <div className='carousel' key={index} >
                                {index}
                            </div>
                        </div>)
                    })
                }
            </Carousel> */}
        <div className='container' >
            <div className='carousel' >
                <Carousel afterChange={onChange} autoplay dots dotPosition='bottom'>
                    {
                        carouselImg.map((img, index) => {
                            return (<div>
                                <div>
                                    <div className='carouselEl' key={index} style={{ backgroundImage: `url(${img})` }} >
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </Carousel>
            </div>
        </div>
    </div>)
}