import { connect } from 'react-redux';

// Import Modals

const ModalConductor = props => {
  switch (props.modal.modalType) {
    default:
      return null;
  }
};

export default connect(
  state => ({
    modal: {
      ...state.default.modal
    }
  }),
  null
)(ModalConductor);
