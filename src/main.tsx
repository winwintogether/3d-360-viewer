/* eslint-disable react-refresh/only-export-components */
import r2wc from '@r2wc/react-to-web-component';
import Model360Viewer from './components/Model360Viewer';

const Model360ViewerElement = r2wc(Model360Viewer, {
  props: {
    assetUrl: 'string',
    enableRotate: 'boolean',
    enableZoom: 'boolean',
  },
});

customElements.define('model-360-viewer', Model360ViewerElement);
