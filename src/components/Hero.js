import React from "react"
import Card from "./Card"
import data from "./../data"

export default function Hero() {

  const cards = data.map(card => {
    return (
      <Card
        key={card.id.toString()}
        title={card.title}
        price={card.price}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        openSpots={card.openSpots}
      />
    )
  })

  return (
    <section className="hero">
      <div className="hero__container container">
        <h1 className="hero__title">Online Experiences</h1>
        <p className="hero__text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        <div className="hero__cards">
          {cards}
        </div>
      </div>
    </section>
  )
}