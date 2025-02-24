import React from 'react'

function page() {
  return (
    <div className='w-full max-h-screen min-h-[500px] flex items-center justify-center'>
        <a href='http://limostal.webd.pro/backend/wp-admin/post.php?post=10&action=edit' target='_blank' ><button type='button' className='border-2 px-5 py-2 hover:bg-sky-500'>Galleria</button></a>
        <a href='http://limostal.webd.pro/backend/wp-admin/post.php?post=40&action=edit' target='_blank' ><button type='button' className='border-2 px-5 py-2 hover:bg-sky-500'>Oferty</button></a>
    </div>
  )
}

export default page