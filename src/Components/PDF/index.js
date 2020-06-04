'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var pdfjs = _interopDefault(require('@bundled-es-modules/pdfjs-dist/build/pdf'));
var React = require('react');
var React__default = _interopDefault(React);

const Pdf = ({
  file,
  onDocumentComplete,
  page,
  scale,
  rotate,
  cMapUrl,
  cMapPacked,
  workerSrc,
  withCredentials
}) => {
  const PdfRef = React.useRef(null);
  const [, numPages] = usePdf({
    PdfRef,
    file,
    page,
    scale,
    rotate,
    cMapUrl,
    cMapPacked,
    workerSrc,
    withCredentials
  });
  React.useEffect(() => {
    onDocumentComplete(numPages);
  }, [numPages]);
  return React__default.createElement("canvas", {
    ref: PdfRef
  });
};

Pdf.defaultProps = {
  onDocumentComplete: () => {}
};
const usePdf = ({
  PdfRef,
  file,
  scale = 1,
  rotate = 0,
  page = 1,
  cMapUrl,
  cMapPacked,
  workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js',
  withCredentials = false
}) => {
  const [pdf, setPdf] = React.useState();
  React.useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
  }, []);
  React.useEffect(() => {
    const config = {
      url: file,
      withCredentials
    };

    if (cMapUrl) {
      config.cMapUrl = cMapUrl;
      config.cMapPacked = cMapPacked;
    }

    pdfjs.getDocument(config).promise.then(setPdf);
  }, [file, withCredentials]); // handle changes

  React.useEffect(() => {
    if (pdf) {
      pdf.getPage(page).then(p => drawPDF(p));
    }
  }, [pdf, page, scale, rotate, PdfRef]); // draw a page of the pdf

  const drawPDF = page => {
    // Because this page's rotation option overwrites pdf default rotation value,
    // calculating page rotation option value from pdf default and this component prop rotate.
    const rotation = rotate === 0 ? page.rotate : page.rotate + rotate;
    let dpRatio = 1;
    dpRatio = window.devicePixelRatio;
    const adjustedScale = scale * dpRatio;
    const viewport = page.getViewport({
      scale: adjustedScale,
      rotation
    });
    const canvas = PdfRef.current;

    if (!canvas) {
      return;
    }

    const canvasContext = canvas.getContext('2d');
    canvas.style.width = `100%`;
    canvas.style.height = `100%`;
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
      canvasContext,
      viewport
    };
    page.render(renderContext);
  };

  const loading = React.useMemo(() => !pdf, [pdf]);
  const numPages = React.useMemo(() => pdf ? pdf._pdfInfo.numPages : null, [pdf]);
  return [loading, numPages];
};

exports.default = Pdf;
exports.usePdf = usePdf;
//# sourceMappingURL=react-pdf-js.cjs.development.js.map
