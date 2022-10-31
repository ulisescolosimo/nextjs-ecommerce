import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navbar, Dropdown, Avatar, Footer } from "flowbite-react";
import { useSelector } from "react-redux";
import {signIn, useSession, getProviders} from 'next-auth/react'
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children, title }) {

  const {data: session, status} = useSession()

  const user = session?.user

  return (
    <>
      <div>
        <Head>
          <title>{title ? title + " - TecnoStore" : "TecnoStore"}</title>
          <meta name="description" content="eCommerce Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    <div className="m-auto bg-gradient-to-br from-current via-cyan-800 to-blue-900">
    <header id="header" className="text-black">
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand>
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2 gap-4">
    {status === 'authenticated' ? <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={user.image} rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          {user.name}
        </span>
        <span className="block truncate text-sm font-medium">
        {user.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link href={'api/auth/signout'}>Sign out</Link>
      </Dropdown.Item>
    </Dropdown> : <div class="flex items-center md:order-2">
            <Link href="/auth" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</Link>
            <Link href="/signup" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</Link>
        </div>}
    
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Link href='/'>Home</Link>
    <Link href='/products'>Products</Link>
    <Link href='/new'>Create</Link>
  </Navbar.Collapse>
</Navbar>
    </header>
    <main id="main" className="flex flex-col h-full justify-center items-center">
      {children}
    </main>
    <footer id="footer">
    <Footer container={true}>
  <Footer.Copyright
    href="#"
    by="Flowbite™"
    year={2022}
  />
  <Footer.LinkGroup>
    <Footer.Link href="#">
      About
    </Footer.Link>
    <Footer.Link href="#">
      Privacy Policy
    </Footer.Link>
    <Footer.Link href="#">
      Licensing
    </Footer.Link>
    <Footer.Link href="#">
      Contact
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>
    </footer>
    </div>
    </>
  );
}
