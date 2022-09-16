import React from "react"
import Card from "./Card"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container container">
        <h1 className="hero__title">Online Experiences</h1>
        <p className="hero__text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        <div className="hero__cards">
          <Card/>
        </div>
      </div>
    </section>
  )
}