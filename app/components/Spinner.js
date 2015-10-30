import React from 'react';

class Spinner extends React.Component {
  render() {
    return (
      <div className="text-center" style={styles.container}>
        <span className="fa fa-spinner fa-spin fa-5x"></span>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    WebkitTransform: 'translate(-50%, 0%)',
  },
};

export default Spinner;
