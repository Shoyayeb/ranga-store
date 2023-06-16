import getFakeStore from '@/lib/getFakeStore';
import Image from 'next/image';
import Link from 'next/link';

type ResType = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

const Products = async () => {
    
    const data: [ResType] = await getFakeStore();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {data.map((product) => (
                            <Link href={product.category} key={product.id} className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 group">
                            <Image src={product.image} width={300} height={300} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">{product.category}</span>
                                <h2 className="text-xl font-semibold tracki">{product.title}</h2>
                            </div>
                            <p className="dark:text-gray-100 truncate">{product.description}</p>
                        </Link>


                            // <div key={product.id} className="group relative">
                            //     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            //         <Image
                            //             width={500}
                            //             height={500}
                            //             src={product.image}
                            //             alt={product.title}
                            //             className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            //         />
                            //     </div>
                            //     <div className="mt-4 flex justify-between">
                            //         <div>
                            //             <h3 className="text-sm text-gray-700">
                            //                 <Link href={product.title}>
                            //                     <span aria-hidden="true" className="absolute inset-0" />
                            //                     {product.title}
                            //                 </Link>
                            //             </h3>
                            //             <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                            //         </div>
                            //         <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            //     </div>
                            // </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Products