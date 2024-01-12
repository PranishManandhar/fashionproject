import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import Footer from './components/Footer';
// import Carousel from './components/Carousel';

export default function App() {
  return (
    <>
    <Nav/>
    {/* <Carousel/> */}

    <div className='w-screen overflow-scroll flex flex-row'>
    <Card Name={"product1"} price={46.65}/>
    <Card Name={"product2"} price={36.65}/>
    <Card Name={"product3"} price={26.65}/>
    <Card Name={"product4"} price={16.65}/>
    <Card Name={"product5"} price={16.65}/>
    <Card Name={"product6"} price={16.65}/>
    <Card Name={"product6"} price={16.65}/>
    </div>
    <div className='w-screen overflow-scroll flex flex-row'>
    <Card Name={"product1"} price={46.65}/>
    <Card Name={"product2"} price={36.65}/>
    <Card Name={"product3"} price={26.65}/>
    <Card Name={"product4"} price={16.65}/>
    <Card Name={"product5"} price={16.65}/>
    <Card Name={"product6"} price={16.65}/>
    <Card Name={"product6"} price={16.65}/>
    </div>

      <Footer/>
    </>
  )
}