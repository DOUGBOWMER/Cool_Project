import Head from 'next/head'
import Header from '../components/Header'
import ChatStart from '../components/ChatStart'
import VideoBg from '../components/VideoBg'
import Footer from '../components/Footer'
import Sbar from '../components/Sbar'

 function TakeFlight() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Take FLight || Doug Bowmer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
        <VideoBg/>
         
        <Sbar/>
        
        
    <Footer className=" fixed bottom-0 z-30"/>

      


    </div>
  )
}
export default TakeFlight