import React from 'react';
import FormBuilder from 'form-builder/index.jsx';

import TopBar from './components/TopBar';

class FormBuilderScene extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <FormBuilder.ReactFormBuilder />
      </div>
    );
  }
}

export default FormBuilderScene;
