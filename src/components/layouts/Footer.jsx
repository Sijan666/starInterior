import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import footerLogo from '../../../public/footerLogo.png'


export default function Footer() {
  return (
    <>
    <footer>
      <div className="pt-17.5 pb-10 bg-[#192324] mt-2">
        <Container>
          <div className="flex justify-between items-center border-b border-white/10 pb-7.5">
            <Image src={footerLogo} alt='footerLogo'/>
          </div>
        </Container>
      </div>
    </footer>
    </>
  )
}
