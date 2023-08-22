import { Carousel , Image} from "react-bootstrap"
import newban1 from '../assets/newban1.jpeg'
import newban2 from '../assets/newban2.jpeg'

const ProductCarousel=()=>{
    return(
        <Carousel pause='hover' className="bg-dark">
            <Carousel.Item  style={{height:450}}>
                    <Image src={newban2} fluid style={{height:'100%',width:'100%'}}/>
            </Carousel.Item>
            <Carousel.Item style={{height:450}}>
                    <Image src={newban1} fluid style={{height:'100%',width:'100%'}}/>
            </Carousel.Item>
            {/* <Carousel.Item style={{height:450}}>
                    <Image src={ban2} fluid style={{height:'100%',width:'100%'}}/>
            </Carousel.Item> */}
        </Carousel>
    )
}

export default ProductCarousel;