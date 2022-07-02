import { memo } from 'react';
import Footer from '../Root/Footer';

const FooterCom = () => {
  return (
    <Footer>
      <div>
        All Rights Reserved for {" "}
        <a href="https://tadreebi.net" target="_blank" rel="noopener noreferrer">
          Tadreebi
        </a>
        <span className="ms-1">&copy; {new Date().getFullYear()}</span>
      </div>
    </Footer>
  )
};

export default memo(FooterCom)
