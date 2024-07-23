import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'
function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a react project to leave a feedback for a product or a service</p>

        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
