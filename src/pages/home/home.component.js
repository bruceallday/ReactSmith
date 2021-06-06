import React from 'react'
import SignupForm from '../../components/signup-form/signupform.compnent'
import Navbar from '../../components/navbar/navbar.component'
import Banner from '../../components/banner/banner.component'
import Section0 from '../../sections/section-0/section-0.component'
import Section1 from '../../sections/section-1/section-1.component'
import Section2 from '../../sections/section-2/section-2.component'
import Footer from '../../components/footer/footer.component'

const Home = (props) => {
  const { theme } = props

  return (
    <div>
      <Navbar theme={theme} />
      <Banner theme={theme} />
      <Section1 theme={theme} />
      <Section2 theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}

export default Home