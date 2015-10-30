import React from 'react';
import MainContainer from './MainContainer';
import Picture from './Picture';
import Spinner from './Spinner';
import getData from '../util/getData.js';

class AppSheetSite extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    getData(this.props.sampleUrl)
      .then((response) => {
        this.setState({
          pictures: response.data,
          isLoading: false,
        });
      })
      .catch((response) => {
        console.log(response);
      });
  }

  render() {
    if (this.state.isLoading === false) {
      const pictures = this.state.pictures.map((picture, index) => {
        return <Picture key={index} picture={picture} />;
      });

      return <MainContainer content={pictures} />;
    } else {
      return <MainContainer content={<Spinner />} />;
    }
  }
}

AppSheetSite.propTypes = {
  sampleUrl: React.PropTypes.string.isRequired,
};

export default AppSheetSite;
