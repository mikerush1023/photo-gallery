import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photoData from '../photos.json'

class PhotoListCard extends Component {
  render() {
    const photoLinkTo = `${this.props.category}/${this.props.index}`

    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <figure className="image">
                <Link to={photoLinkTo}>
                  <img src={this.props.imageURL} alt={this.props.title} />
                </Link>
                <figcaption>
                  <Link to={photoLinkTo}>{this.props.title}</Link>
                </figcaption>
              </figure>
            </div>
            <div className="content" />
          </div>
        </div>
      </div>
    )
  }
}

export class PhotoList extends Component {
  render() {
    const category = this.props.match.params.category

    const photoListData = photoData[category]

    const photos = photoListData.photos

    return (
      <div className="container">
        <h3 className="title">{photoListData.title}</h3>
        <h4 className="subtitle">{photoListData.description}</h4>
        <div className="columns is-multiline">
          {photos.map((photo, index) => (
            <PhotoListCard
              key={photo.title}
              imageURL={photo.imageURL}
              title={photo.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    )
  }
}
