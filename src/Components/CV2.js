import React, { useRef } from 'react';
import Pdf from './../image/JAPG_CV_2020.pdf'
import { usePdf } from './PDF';
 
const CV2 = () => {

    const PdfRef = useRef(null);
 
  const [loading] = usePdf({
    file: Pdf,
    scale: 1,
    rotate: 20,
    PdfRef
  });

  
  return (
    <div>
      {loading && <span>Loading...</span>}
      <canvas ref={PdfRef}/>
    </div>
  );
}
 
export default CV2;