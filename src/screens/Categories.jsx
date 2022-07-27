import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Categories = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar cartDirect={true}></Navbar>
    </div>
  )
}

export default Categories