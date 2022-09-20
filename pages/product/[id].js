
import data from "../../data.js"
import styles from "../../styles/product.module.css"
import Image from "next/image"
import { useState, useEffect } from "react"
export const getStaticPaths = () => {

    const paths = data.map(e => {
        return {
            params: {id: e.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = data[id]

    return {props: {product: res}}
} 

export default function Product({product}) {

    const [mainImg, setMainImg] = useState(<Image src = {product.imgUrls[0]} layout = "fixed" width = {800} height = {500}/>)
    
    const imgUrls = product.imgUrls
    function switchImage(index) {
        for (let i = 0; i < imgUrls.length; i++){
            const sidebarImg = document.getElementById(`sidebarImg${i}`)

            if (i != index) {sidebarImg.style.border = "none"
            sidebarImg.style.borderRadius = "0px"
        }
            else {
                sidebarImg.style.border = "thin solid black"
                sidebarImg.style.borderRadius = "3px"
            }

        }
        setMainImg(<Image src = {imgUrls[index]} layout = "fixed" width = {800} height = {500}/>)
    }

     const sidebar = (
            <div className= {styles.sidebar}>
                {imgUrls.map((imgUrl, index) => <img src = {imgUrl} id={`sidebarImg${index}`} className={styles.optionImg} onClick={() => switchImage(index)}/>)}
            </div>
            )
        
    return (
        <>
        <div className= {styles.browseContainer}>
            <div className="grid grid-cols-[150px_auto_auto]">
                {sidebar}
                <div className="flex items-center justify-center max-w-64 min-h-64">
                    {mainImg}
                </div>
                <div className="flex flex-col items-center text-black">
                    <div className= 'text-6xl font-medium'>
                        {product.name}
                    </div>
                    <div className="text-lg">
                        of type and scrambled it to make a type specimen book. It has survived not 
                        only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}