import React, { Component } from "react";
import superagent from "superagent";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    superagent
      .get("https://developers.zomato.com/api/v2.1/categories")
      .set("user-key", `${process.env.ZOMATO_API_KEY}`)
      .set("Accept", "application/json")
      .then(res => {
        this.setState({
          categories: res.body.categories
        });
      });
  }

  render() {
    return (
      <main id="home">
        <h1 className="lg-heading">Food Suite Dashboard</h1>
        <h2>Food Categories</h2>
        <ul>
          {this.state.categories.map(cat => (
            <li key={cat.categories.id}>{cat.categories.name}</li>
          ))}
        </ul>
      </main>
    );
  }
}
