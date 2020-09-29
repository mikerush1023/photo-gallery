import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import photoData from '../photos.json'

export class PhotoDetail extends Component {
  render() {
    const category = this.props.match.params.category
    const photoIndex = this.props.match.params.photoIndex

    // const photoListData = photoData[category]
    const photo = photoData[category].photos[photoIndex]

    return (
      <div className="container">
        <h3 className="title">{photo.title}</h3>
        <figure className="image">
          <img src={photo.imageURL} alt={photo.title} />
        </figure>
        <p className="is-small">
          <a href={photo.sourceURL}>Source</a>
        </p>
      </div>
    )
  }
}
