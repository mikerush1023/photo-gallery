import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { CategoryList } from './pages/CategoryList'
import { PhotoList } from './pages/PhotoList'
import { PhotoDetail } from './pages/PhotoDetail'

export class App extends Component {
  render() {
    return (
      <main>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="subtitle">A Photo Gallery</h1>
              <h2 className="title">
                <Link to="/">Home</Link>
              </h2>
            </div>
          </div>
        </section>

        <section className="section">
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:category" component={PhotoList} />
            <Route
              exact
              path="/:category/:photoIndex"
              component={PhotoDetail}
            />
          </Switch>
        </section>
      </main>
    )
  }
}
