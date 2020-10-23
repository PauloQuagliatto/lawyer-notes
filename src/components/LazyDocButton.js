import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import React from 'react';
import Doc from './Doc';

const LazyDocButton = (props) => (
  <button
    className="btn btn--terciary give-space"
    onClick={async () => {
      const doc = <Doc {...props} />
      const asPdf = pdf([]) // {} is important, throws without an argument
      asPdf.updateContainer(doc)
      const blob = await asPdf.toBlob()
      saveAs(blob, 'relatório.pdf')
    }}
  >Relatório</button>
)



export { LazyDocButton as default }