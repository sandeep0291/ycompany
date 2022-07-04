import './offers.scss';

const Offers = function () {
  return (
    <section id="offers">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="img-responsive"
              alt="x"
              srcSet="https://rukminim1.flixcart.com/flap/3376/560/image/560b0116e1761adf.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/560b0116e1761adf.jpg?q=50 1x"
              src="https://rukminim1.flixcart.com/flap/1688/280/image/560b0116e1761adf.jpg?q=50"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Offers;
