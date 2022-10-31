import {getSession} from 'next-auth/react'

export default async function handler(req, res) {

  const session = await getSession({req})

  if(!session){
    return res.status(403).send('Forbidden')
  }

  return res.status(200).json({
    name: 'Ulises'
  })
}
