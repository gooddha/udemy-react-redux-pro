import React from 'react';
import SwapiService from '../../services/swapi-service'
import './item-details.css';
import Spinner from '../spinner'
import ErrorButton from '../error-button';


export default class ItemDetails extends React.Component {

  state = {
    item: null,
    image: null,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageURL } = this.props;

    this.setState({
      loading: true
    })

    if (!itemId) {
      return
    }

    getData(itemId)
      .then((item) => {
        console.log(getImageURL(item))
        this.setState({ item, image: getImageURL(item), loading: false });
      })
  }

  render() {
    const { item, image, loading } = this.state;

    if (!item) {
      return (
        <div className="person-details card">
          <span>Select a person from a list</span>
        </div>
      )
    }

    if (loading) {
      return (
        <div className="person-details card">
          <Spinner />
        </div>
      );
    } else {
      return (
        <div className="person-details card">
          <PersonView person={item} image={image} />
        </div>
      );
    }

  }
}

const PersonView = ({ person, image }) => {

  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <React.Fragment>

      <img className="person-image"
        src={image} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>

        <ErrorButton />
      </div>

    </React.Fragment>
  )

}