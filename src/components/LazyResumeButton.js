import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import React from 'react';
import ResumedDoc from './ResumedDoc';

const LazyResumeButton = (props) => (
  <button
    className="btn btn--terciary give-space"
    onClick={async () => {
      const doc = <ResumedDoc {...props} />
      const asPdf = pdf([]) // {} is important, throws without an argument
      asPdf.updateContainer(doc)
      const blob = await asPdf.toBlob()
      saveAs(blob, 'resumido.pdf')
    }}
  >Resumido</button>
)



export { LazyResumeButton as default }