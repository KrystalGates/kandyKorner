import React, { Component } from "react";

export default class CandyList extends Component {
  render() {
    return (
      <section className="candies">
        {this.props.candies.map(candy => (
          <div key={candy.id}>
            {candy.name}
            <div>of type</div>
            {
              this.props.candyTypes.find(type => type.id === candy.candyTypeId)
                .type
            }
            <div>
            <button
              onClick={() => this.props.deleteFunc("candies", candy.id)}
              className="card-link"
            >
              Delete
            </button>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
