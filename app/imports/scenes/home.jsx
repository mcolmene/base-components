import React from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'
//bootstrap Components
import {Grid} from 'react-bootstrap/lib/'
import {Row} from 'react-bootstrap/lib'
import {Col} from 'react-bootstrap/lib'

import BsButton from '../components/Button.jsx'
import Header from '../components/Header.jsx'
import BsNavbar from '../components/Navbar.jsx'

//custom Components
import LandingPageImg from '../components/LandingPageImg.jsx'
import CircleButton from '../components/CircleButton.jsx'
import DetailsBlock from '../components/DetailsBlock.jsx'
import Footer from '../components/Footer.jsx'
import Banner from '../components/Banner.jsx'

//styles

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <LandingPageImg style={['background , parallax']}/>
        <LandingPageImg style='background-helper' />
        <Banner />
        <div className="bannerButtons">
          <Col smOffset={3} sm={12} md={3}>
            <Link to="/menu" className="menuLink hoverTransition">Menu</Link>
          </Col>
          <Col sm={12} md={3}>
            <Link to="/menu" className="menuLink hoverTransition">Menu</Link>
          </Col>
        </div>
        <Col sm={12} md={12} className="cbContainer">
          <CircleButton />
        </Col>
        <Grid>
          <Row>
            <Col sm={12} md={4}>
              <DetailsBlock imageSrc="../../static/fork.png" style="feature-div center" feature="See a menu" details="See a full menu of all the items that are availble. You will also be able to request a food to be made."/>
            </Col>
            <Col sm={12} md={4}>
              <DetailsBlock imageSrc="../../static/chefshat.png" style="feature-div center" feature="Ask the chef" details="Ask to chef to add certain items to list."/>
            </Col>
            <Col sm={12} md={4}>
              <DetailsBlock imageSrc="../../static/cookbook.png" style="feature-div center" feature="Know what's cooking" details="There will be a chefs top 3 that you can pick from to help you decide what to eat."/>
            </Col>
          </Row>
          <Row>
            <Col smOffset={4} sm={12} md={4}>
              <Link to="/menu" className="menuLink hoverTransition">See what's on the menu!</Link>
            </Col>
          </Row>
        </Grid>
        <Col sm={12} md={12} className="imageContainer parallax">
            <h2><span className="subtitle">We always use the<span className='spacer'></span><br /><span className='spacer'></span>Freshest Ingredients</span></h2>
        </Col>
        <Col sm={12} md={12} className="imgContainerHelper"></Col>
        <Footer />
      </div>
        );
  }
}
