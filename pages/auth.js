import Layout from '../components/Layout'
import {signIn, useSession, getProviders} from 'next-auth/react'
import {useRouter} from 'next/router'

function auth() {

  const {data: session, status} = useSession()
  const router = useRouter()

  console.log(session?.user)
  
  if(status !== 'loading' && status === 'authenticated') {
    router.push('/')
  }

  return (
    <Layout>
      <button onClick={()=> signIn('github')} className="bg-black p-3 rounded-xl">Sign in with GitHub</button>
      <button onClick={()=> signIn('google')} className="bg-white text-black p-3 rounded-xl">Sign in with Google</button>
    </Layout>
  );
}

export default auth;
