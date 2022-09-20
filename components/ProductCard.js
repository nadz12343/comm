import styles from "../styles/mountain-bikes.module.css"
import Link from "next/link"
import data from "../data.js"
import Image from "next/image"
export default function ProductCard({product}) {
    return (
        <div className="flex flex-col items-center justify-center my-2 overflow-hidden text-black bg-white border-2 border-black rounded w-96 h-96">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className='w-3/5 h-40 my-6'>
                <Image src = {product.imgUrls[0]} alt="Picture of the author" width={300} height={200} priority/>
            </div>
            <h1 className="text-2xl font-bold">{`£${product.price}`}</h1>
            <Link href = {`/product/${product.id}`}>
                <button className='flex items-center justify-center w-full mt-2 text-2xl font-bold text-white bg-black h-2/4' >View more information</button>
            </Link>
        </div>
    )
}