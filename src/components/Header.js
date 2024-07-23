import React from 'react'
import PropTypes from 'prop-types';

function Header({text , bgColor , textColor}) {          /* passing props in functional component */
  const headerStyles = {                                 /* Adding inline CSS */
    backgroundColor : bgColor,
    color : textColor
  }
  return (                                                /**JSX main code */
    <header  style = {headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text : "Feedback UI",
  bgColor : 'rgba(0,0,0,0.4)',
  

}
Header.propTypes = {
  text : PropTypes.string,
}

export default Header
