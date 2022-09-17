import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {

  const cards = data.map(card => {
    return (
      <Card
        key={card.id.toString()}
        {...card}
      />
    )
  })

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="cards">
        <div className="cards__container container">
          {cards}
        </div>
      </section>
    </div>
  )
}