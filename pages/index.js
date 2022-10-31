import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Accordion } from 'flowbite-react'
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then((res)=>res.json())
      .then(json => setProducts(json.data))
  }, [])

  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Layout title='Home'>
    <div className="my-20 text-white">
    <Accordion>
  <Accordion.Panel>
    <Accordion.Title>
      What is Flowbite?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-white">
        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
      </p>
      <p className="text-white">
        Check out this guide to learn how to{' '}
        <a
          href="https://flowbite.com/docs/getting-started/introduction/"
          className="text-blue-300 hover:underline dark:text-blue-200"
        >
          get started
        </a>
        {' '}and start developing websites even faster with components on top of Tailwind CSS.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      Is there a Figma file available?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-white">
        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
      </p>
      <p className="text-white">
        Check out the{' '}
        <a
          href="https://flowbite.com/figma/"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          Figma design system
        </a>
        {' '}based on the utility classes from Tailwind CSS and components from Flowbite.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
    </div>
    </Layout>
  )
}


