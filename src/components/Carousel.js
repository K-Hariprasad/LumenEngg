import React from "react"

class Carousel extends React.Component {

    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid w-100" src="./bulb.jpg" alt="First slide" />
                        <div className="carousel-caption">
                            <h5>Add content here</h5>
                            <p>bla bla bla</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid w-100 " src="./db.jpg" alt="Second slide" />
                        <div className="carousel-caption">
                            <h5>Add content here</h5>
                            <p>bla bla bla</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid w-100" src="./bulb.jpg" alt="Third slide" />
                        <div className="carousel-caption">
                            <button className="btn btn-outline-primary bg-transparent">Request Consultation</button>
                        </div>
                    </div>


                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        )
    }
}
export default Carousel
