
import React, { version } from 'react'
import PropTypes from 'prop-types'

function Button({children,type,version,isDisabled,}) {
  return (
    <button type={type}  disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}
Button.propTypes = {
    children: PropTypes.node.isRequired ,
    version: PropTypes.string,
    type: PropTypes.string ,
    isDisabled: PropTypes.bool ,
}
Button.defaultProps = {
    type: "button",
    version: 'primary' ,
    isDisabled : false,
}
export default Button
