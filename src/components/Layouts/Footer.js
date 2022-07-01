import React from 'react'
import { CFooter } from '@coreui/react'

const Footer = () => {
  return (
    <CFooter>
      <div>
        All Rights Reserved for {" "}
        <a href="https://tadreebi.net" target="_blank" rel="noopener noreferrer">
          Tadreebi
        </a>
        <span className="ms-1">&copy; {new Date().getFullYear()}</span>
      </div>
    </CFooter>
  )
}

export default React.memo(Footer)
