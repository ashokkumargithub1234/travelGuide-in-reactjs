import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelItem from '../TravelItem'
import './index.css'

const travelApiUrl = 'https://apis.ccbp.in/tg/packages'

class TravelGuideContainer extends Component {
  state = {isLoading: true, travelsData: []}

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const response = await fetch(travelApiUrl)
    const fetchedData = await response.json()
    console.log(fetchedData)
    const formattedData = fetchedData.packages.map(eachObject => ({
      id: eachObject.id,
      imageUrl: eachObject.image_url,
      name: eachObject.name,
      description: eachObject.description,
    }))
    // console.log(formattedData)
    this.setState({travelsData: formattedData, isLoading: false})
  }

  renderLoaderSpinner = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelGuideData = () => {
    const {travelsData} = this.state
    return (
      <ul className="travels-list">
        {travelsData.map(eachTravel => (
          <TravelItem key={eachTravel.id} travelDetails={eachTravel} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="travel-container">
        <h1 className="title">Travel Guide</h1>
        <hr className="title-line" />
        {isLoading ? this.renderLoaderSpinner() : this.renderTravelGuideData()}
      </div>
    )
  }
}
export default TravelGuideContainer
