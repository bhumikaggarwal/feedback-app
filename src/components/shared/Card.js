
import PropTypes from 'prop-types'
import React from 'react'


//   return (
//     <div className= {`Card ${reverse && 'reverse' }`}>
//      {children} 
//     </div>
//   )

function Card({children , reverse}) {
  return (
    <div className='Card' style={{
        backgroundColor:  reverse? 'rgba(0,0,0,0.4)':'#fff' ,
        color: reverse? '#fff' : 'rgba(0,0,0,0.4)' 
    }}>
        {children}
      
    </div>
  )
}
Card.defaultProps = {
    reverse : true,
}
Card.propTypes = {
    children: PropTypes.node.isRequired ,
    reverse : PropTypes.bool ,
}
export default Card
