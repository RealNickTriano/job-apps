import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center'>
        <ul className='font-roboto font-semibold flex justify-center items-center gap-24 bg-primary py-4 shadow-lg mb-12 rounded-full w-2/3 mt-4'>
            <li><button>Item</button></li>
            <li><button>Item</button></li>
            <li><button>Item</button></li>
            <li><button>Item</button></li>
            <li><button>Item</button></li>
        </ul>
    </div>
  )
}

export default Navbar