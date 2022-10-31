import { useRouter } from 'next/router'
import React, {useState} from 'react'
import Layout from '../components/Layout'

const New = () => {

    const router = useRouter()

    const [form, setForm] = useState({
        fullname: '',
        email: '',
        password: '',
        role: 'user',
        image: '',
        from: 'form'
    })

    const handleChange = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name]: value
        })
        console.log(form)
    }

    const [message, setMessage] = useState([])
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })

            const data = await res.json()

            if(!data.success){  
                for(const key in data.error.errors){
                    let error = data.error.errors[key]
                    setMessage((oldmessage)=>[...oldmessage, {message: error}])
                }
            } else {
                router.push('/products')
            }

        }catch(error){
            console.log(error)
        }
    }

  return (
    <Layout title={'Add product'}>
        <form className="my-10" onSubmit={handleSubmit}>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="product" class="text-2xl block mb-2 font-medium text-gray-900 dark:text-gray-300">Product</label>
            <input value={form.product} onChange={handleChange} type="text" id="product" name="product" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product name" required/>
        </div>
        <div>
            <label for="brand" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Brand</label>
            <input value={form.brand} onChange={handleChange} type="text" id="brand" name="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brand" required/>
        </div>
        <div>
            <label for="price" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Price</label>
            <input value={form.price} onChange={handleChange} type="number" id="price" name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label for="stock" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Stock</label>
            <input value={form.stock} onChange={handleChange} type="number" id="stock" name="stock" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Stock" required/>
        </div>
        <div>
            <label for="image" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Image</label>
            <input value={form.image} onChange={handleChange} type="text" id="image" name="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image" required/>
        </div>
        <div>
            <label for="category" class="text-2xl block mb-2 font-medium text-gray-900 dark:text-gray-300">Category</label>
            <input value={form.category} onChange={handleChange} type="text" id="category" name="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product name" required/>
        </div>
        <div className="w-full col-span-2">
            <label for="description" class="text-center block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-400">Description</label>
            <textarea value={form.description} onChange={handleChange} id="description" name="description" type="text" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div> 
    </div>
    <div className="flex justify-center items-center">
            <button className="text-white mx-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">Add product to store</button>
        </div>
        {message.map((mes)=> (
            <p key={mes}>{mes}</p>
        ))}
</form>
    </Layout>
  )
}

export default New