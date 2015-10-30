import React from 'react';
import { Modal } from 'react-bootstrap';

class Picture extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <img src={this.props.picture.picture}
          onClick={this.open.bind(this)}
          className="img-thumbnail img-responsive center-block"
          style={styles.image} />
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Body>
            <img src={this.props.picture.picture}
              onClick={this.open.bind(this)}
              className="img-rounded img-responsive center-block" />
          </Modal.Body>
          <Modal.Footer style={styles.modalFooter}>
            <p>{this.props.picture.text}</p>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
}

Picture.propTypes = {
  picture: React.PropTypes.object.isRequired,
};

const styles = {
  image: {
    width: 175,
    height: 175,
    objectFit: 'cover',
    marginBottom: 10,
  },
  modalFooter: {
    textAlign: 'center',
  },
};

export default Picture;
