import React from 'react'
import { HiChartPie } from 'react-icons/hi'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

type Props = {
    children?: React.ReactNode;
}

const SideNav = ({children}: Props) => {
  return (
    <>
        <Navbar />
        <Sidebar>
            {children}
        </Sidebar>
    </>
  )
}

export default SideNav