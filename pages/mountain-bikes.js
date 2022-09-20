
import data from "../data.js"

import styles from "../styles/mountain-bikes.module.css"
import ProductCard from "../components/ProductCard"
export default function MountainBike(){

    const bikes = data.map(e => {
       return  (e.type === "mountain" && <ProductCard key = {e.id} product = {e}/>)
    })

    return(
    <>
        {/* <div className={styles.container }>
            <Image src = "/mb.jpg" className={styles.img} layout="responsive" width={9} height={2}/>
            <h1 className= {styles.bgText}>Designed for off-road</h1>
        </div> */}
        <div className={styles.container}>
            <h1 className= 'text-4xl sm:text-7xl'>Designed for off-road</h1>
        </div>
        <div className="container flex justify-center w-screen min-h-0 p-0 mx-auto overflow-hidden">
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {bikes}
            </div>
        </div> 

    </>
    )
}