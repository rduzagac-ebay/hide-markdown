import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the hide-markdown extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'hide-markdown:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension hide-markdown is activated!');
  }
};

export default extension;
