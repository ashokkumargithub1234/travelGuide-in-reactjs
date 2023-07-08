import './index.css'

const TravelItem = props => {
  const {travelDetails} = props
  const {imageUrl, name, description} = travelDetails
  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="travel-image" />
      <div className="content-container">
        <h1 className="travel-place">{name}</h1>
        <p className="travel-description">{description}</p>
      </div>
    </li>
  )
}
export default TravelItem
