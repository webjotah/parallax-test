'use client'
import Image from 'next/image'
import Bg from './images/background.png'
import Plx from 'react-plx'

const ParallaxDataBg = [{
  start: 0,
  end: 500,
  properties: [
    {
      startValue: 0,
      endValue: 200,
      property: 'translateY',
      easing: 'easeIn',
    },],
}]

const ParallaxDataText = [{
  start: 0,
  end: 500,
  properties: [
    {
      startValue: 1,
      endValue: 0,
      property: 'opacity',
    },],
}]

export default function Home() {
  return (
    <div className='h-[200vh] relative overflow-hidden'>
      <Plx parallaxData={ParallaxDataBg}>
        <Image src={Bg} alt='background' width={1920} />
      </Plx>
      <Plx parallaxData={ParallaxDataText}>
        <h1 className='absolute top-96 left-[42%] z-10 text-5xl font-bold drop-shadow-md shadow-black'>Parallax</h1>
      </Plx>
    </div>
  )
}
