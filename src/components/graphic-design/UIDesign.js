import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function UIDesign({ setDesignModalUI, designModalUI }) {
  return (
    <div className='modal-container'>
      <div className='close-container'>
        <div
          className='leftright'
          onClick={() => setDesignModalUI(false)}
        ></div>
        <div
          className='rightleft'
          onClick={() => setDesignModalUI(false)}
        ></div>
      </div>
      <div className='design-info'>
        <h1>UI Redesign Challenge</h1>
        <p>
          A personal project where I challenged myself to resdesign the UI of
          some of my most used or favorite apps. <br />
          It was a way for me to quickly explore different directions with
          design without spending too much time on one!
        </p>
        <div className='ui-redesign-imgs'>
          <img src='/graphic-design/ui-redesign/ui-1.png' alt='' />
          <img src='/graphic-design/ui-redesign/ui-2.png' alt='' />
          <img src='/graphic-design/ui-redesign/ui-3.png' alt='' />
          <img src='/graphic-design/ui-redesign/ui-4.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default UIDesign;
