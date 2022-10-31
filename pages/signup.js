import Layout from "components/Layout";
import { useRouter } from 'next/router'
import React, {useState} from 'react'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios'
import jwt from 'jsonwebtoken'

export default function Signup (){

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    const router = useRouter()
    
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        password: '',
        role: 'user',
        image: '',
        from: 'form',
        logged: false,
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
            await axios.post('/api/users', form, config)
                .then((res)=>{
                    if(res.data.message === 'User already exists'){
                        toast.error(res.data.message, {
                            position: toast.POSITION.BOTTOM_RIGHT,
                        });
                    }else{
                        toast.success(res.data.message, {
                            position: toast.POSITION.BOTTOM_RIGHT,
                        });
                        router.push('/auth')
                    }
                })
            
        }catch(error){
            console.log(error)
        }
    }
    

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full name</label>
            <input value={form.fullname} name="fullname" onChange={handleChange} type="text" id="fullname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
            <input value={form.image} name="image" onChange={handleChange} type="text" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
        </div>  
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input value={form.email} name="email" onChange={handleChange} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
        <input value={form.password} name="password" onChange={handleChange} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
<ToastContainer />
        </Layout>

    );
}