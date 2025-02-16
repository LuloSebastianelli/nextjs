import { mockData } from "@/data/products"
import Image from "next/image"
import QtySelector from "./QtySelector"
import GoBack from "../ui/GoBack"



const ProductDetail = ({ slug }) => {
    const item = mockData.find(p => p.slug === slug)

    return (
        <div className="max-w-4xl m-auto">
            <GoBack className="text-sm text-blue-500 underline mb-6"/>
            <section className="flex gap-6">
                <div className="basis-1/2">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">{item.title}</h2>
                    <p className="text-4xl">$ {item.price}</p>

                    <QtySelector item={item}/>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail