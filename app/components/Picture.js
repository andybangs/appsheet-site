import React from 'react';
import { Modal } from 'react-bootstrap';

class Picture extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      showModal: false,
    };
  }

  render() {
    const hover = this.state.hover ? styles.hover : styles.leave;

    return (
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <div style={hover}>
          <img src={this.props.picture.picture}
            onMouseEnter={this.toggleHover.bind(this)}
            onMouseLeave={this.toggleHover.bind(this)}
            onClick={this.toggleModal.bind(this)}
            className="img-thumbnail img-responsive center-block"
            style={styles.image} />
        </div>
        <Modal show={this.state.showModal} onHide={this.toggleModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title style={styles.modalText}>Image {this.props.number}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.picture.picture}
              className="img-rounded img-responsive center-block" />
          </Modal.Body>
          <Modal.Footer style={styles.modalText}>
            <p>{this.props.picture.text}</p>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
      hover: false,
    });
  }
}

Picture.propTypes = {
  picture: React.PropTypes.object.isRequired,
  number: React.PropTypes.number.isRequired,
};

const styles = {
  image: {
    width: 175,
    height: 175,
    objectFit: 'cover',
    marginBottom: 10,
    cursor: 'pointer',
  },
  hover: {
    opacity: 0.6,
  },
  leave: {
    opacity: 1,
  },
  modalText: {
    textAlign: 'center',
  },
};

export default Picture;
