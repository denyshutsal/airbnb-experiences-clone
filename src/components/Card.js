import React from "react"

export default function Card(props) {

  let badgeText

  // will return "Sold Out" even if "Location" prop is equal to "Online"
  if (props.openSpots === 0) {
    badgeText = 'sold'
  } else if (props.location.toLowerCase() === 'online') {
    badgeText = 'online'
  }

  return (
    <section className="card">
      <a className="card__link" href="/" target="_blanc" rel="noopener noreferrer nofollow">
        <img className="card__img" src={`./images/${props.coverImg}`} width="176" height="235" alt="card-img"/>
        {badgeText && <span className="card__badge">{badgeText}</span>}
        <div className="card__meta">
          <div className="card__stats">
            <div className="card__star">
              <svg className="card__star-img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" height="14" width="14" fill="red"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
            </div>
            <span className="card__stars">{props.stats.rating}</span>
            <span className="card__reviews">({props.stats.reviewCount})</span>
            <span className="card__country">{props.location}</span>
          </div>
          <h2 className="card__title truncate">{props.title}</h2>
          <span className="card__price-text"><span className="card__price">From ${props.price}</span> / person</span>
        </div>
      </a>
    </section>
  )
}