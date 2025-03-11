const MapSection = ({ location }) => {
    return (
      <div className="relative rounded-xl overflow-hidden h-96 shadow-xl">
        <iframe
          title="Office Location"
          className="absolute inset-0 w-full h-full border-0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.city},${location.state}&zoom=${location.zoom}`}
          allowFullScreen
        ></iframe>
      </div>
    )
  }

  export default MapSection

