import React from 'react';
import { Modal } from 'react-bootstrap';
import FormBuilder from 'form-builder/index.jsx';

const answers = {};
// const answers = {
//   'dropdown_38716F53-51AA-4A53-9A9B-367603D82548': 'd2',
//   'checkboxes_8D6BDC45-76A3-4157-9D62-94B6B24BB833': [
//     'checkboxes_option_8657F4A6-AA5A-41E2-A44A-3E4F43BFC4A6',
//     'checkboxes_option_1D674F07-9E9F-4143-9D9C-D002B29BA9E4',
//   ],
//   'radio_buttons_F79ACC6B-7EBA-429E-870C-124F4F0DA90B': [
//     'radiobuttons_option_553B2710-AD7C-46B4-9F47-B2BD5942E0C7',
//   ],
//   'rating_3B3491B3-71AC-4A68-AB8C-A2B5009346CB': 4,
// };

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      previewVisible: false,
      shortPreviewVisible: false,
      roPreviewVisible: false
    };

    const update = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);

    FormBuilder.ElementStore.subscribe(state => update(state.data));
  }

  showPreview() {
    this.setState({
      previewVisible: true
    });
  }

  showShortPreview() {
    this.setState({
      shortPreviewVisible: true
    });
  }

  showRoPreview() {
    this.setState({
      roPreviewVisible: true
    });
  }

  closePreview() {
    this.setState({
      previewVisible: false,
      shortPreviewVisible: false,
      roPreviewVisible: false
    });
  }

  _onChange(data) {
    this.setState({
      data
    });
  }

  // eslint-disable-next-line no-unused-vars
  _onSubmit(data) {
    // console.log('onSubmit', data);
    // Place code to post json data to server here
  }

  render() {
    let modalClass = 'modal';
    if (this.state.previewVisible) {
      modalClass += ' show';
    }

    let shortModalClass = 'modal short-modal';
    if (this.state.shortPreviewVisible) {
      shortModalClass += ' show';
    }

    let roModalClass = 'modal ro-modal';
    if (this.state.roPreviewVisible) {
      roModalClass += ' show';
    }

    return (
      <div className="clearfix" style={{ margin: '10px', width: '70%' }}>
        <h4 className="pull-left">Preview</h4>
        <button
          className="btn btn-primary pull-right"
          style={{ marginRight: '10px' }}
          onClick={this.showPreview.bind(this)}
        >
          Preview Form
        </button>
        <button
          className="btn btn-default pull-right"
          style={{ marginRight: '10px' }}
          onClick={this.showShortPreview.bind(this)}
        >
          Alternate/Short Form
        </button>
        <button
          className="btn btn-default pull-right"
          style={{ marginRight: '10px' }}
          onClick={this.showRoPreview.bind(this)}
        >
          Read Only Form
        </button>

        <Modal
          show={this.state.previewVisible}
          onHide={this.closePreview.bind(this)}
        >
          <Modal.Body>
            <FormBuilder.ReactFormGenerator
              download_path=""
              back_action="/"
              back_name="Back"
              answer_data={answers}
              action_name="Save"
              form_action="/api/form"
              form_method="POST"
              // onSubmit={this._onSubmit}
              variables={this.props.variables}
              data={this.state.data}
            />
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={this.closePreview.bind(this)}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>

        {this.state.roPreviewVisible && (
          <div className={roModalClass}>
            <div className="modal-dialog">
              <div className="modal-content">
                <FormBuilder.ReactFormGenerator
                  download_path=""
                  back_action="/"
                  back_name="Back"
                  answer_data={answers}
                  action_name="Save"
                  form_action="/"
                  form_method="POST"
                  read_only={true}
                  variables={this.props.variables}
                  hide_actions={true}
                  data={this.state.data}
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    onClick={this.closePreview.bind(this)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {this.state.shortPreviewVisible && (
          <div className={shortModalClass}>
            <div className="modal-dialog">
              <div className="modal-content">
                <FormBuilder.ReactFormGenerator
                  download_path=""
                  back_action=""
                  answer_data={answers}
                  form_action="/"
                  form_method="POST"
                  data={this.state.data}
                  display_short={true}
                  variables={this.props.variables}
                  hide_actions={false}
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    onClick={this.closePreview.bind(this)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
