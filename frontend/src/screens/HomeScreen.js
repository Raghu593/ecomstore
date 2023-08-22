import React from 'react'
import { Row , Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import { useGetAllProductsQuery } from '../app/api';
import Loader from '../components/Loader';
import ProductCarousel from '../components/Productcarousal';

const HomeScreen = () => {



  
  // const[products,setProducts]=useState([]);

  // const loggedin=useSelector((state)=>state.user.loggedIn);

  // useEffect(()=>{
  //   const fetchProducts=async()=>{
  //   const {data}= await axios.get('/api/products')
  //     setProducts(data);
  //   }
  //   fetchProducts()
  // },[])

  // useEffect(()=>{
  //   dispatch(productListRequest())
  // },[])

  const {data,isLoading,isSuccess}=useGetAllProductsQuery();

  // const getMyOrders=useGetMyOrdersQuery();

  // {isSuccess && console.warn(data)}

  // const add=()=>{
    // dispatch(productListRequest())
  //   console.log("clicked")
  // }

  // {isSuccess && products.push(data)}


    // const Count=useSelector((state)=>state.product.count);

console.log(data)

  return (
    
    <main className="py-3">
      <Container>
          <ProductCarousel/>
          </Container>
    { 
      isLoading && 

      <Loader/>


    }


    {isSuccess &&
    <Container>
    <h1>Latest Produx</h1>
    <Row>
        {data.map(product=>(
            <Col key={product._id} sm={12} md={6} lg={3} xl={4}>
            <Product product={product}/>
            </Col>
        ))}
    </Row>
    </Container>
}
    </main>
  )
}

export default HomeScreen