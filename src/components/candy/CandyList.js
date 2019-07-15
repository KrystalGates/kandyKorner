import React, { Component } from "react"

export default class CandyList extends Component {
    render() {
        return (
            <section className="candies">
               {
    this.props.candies.map(candy =>
        <div key={candy.id}>
            {candy.name}
            of type<div> </div>
            {
                this.props.candyTypes
                    .find(type => type.id === candy.candyTypeId)
                    .type
            }
        </div>
    )
}
            </section>
        )
    }
}