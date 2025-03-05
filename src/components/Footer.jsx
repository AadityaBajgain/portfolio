import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#12806c] text-white'>
        <div className='w-[90vw] m-auto'>
            <p className='text-center'>&copy; {`${new Date().getFullYear()}`} Aaditya Bajgain. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
