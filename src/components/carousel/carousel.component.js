import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'

import { useStyles } from './carousel.styles'

const Carousel = (props) => {
  const classes = useStyles()
  const { theme, slides } = props

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0} >{slides[0]}</Slide>
        <Slide index={1} >{slides[0]}</Slide>
        <Slide index={2} >{slides[0]}</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  )
}

export default Carousel