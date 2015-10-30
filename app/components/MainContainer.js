import React from 'react';

class MainContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div style={styles.navText}>
            <h4>AppSheet PhotoViewer</h4>
          </div>
        </nav>
        <div>{this.props.content}</div>
        <footer className="footer" style={styles.footer}>
          <div style={styles.footerText}>
            <p className="text-muted">Created by: <a href="http://andybangs.com">Andy Bangs</a></p>
          </div>
        </footer>
      </div>
    );
  }
}

MainContainer.propTypes = {
  content: React.PropTypes.any.isRequired,
};

const styles = {
  navText: {
    marginTop: 15,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    backgroundColor: '#f5f5f5',
  },
  footerText: {
    marginTop: 10,
    textAlign: 'center',
  },
};

export default MainContainer;
