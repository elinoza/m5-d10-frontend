import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-elastic-carousel";
import { Card, Row, Container, Spinner } from "react-bootstrap";

class Gallery2 extends React.Component {
  state = {
    movies: [],
    search:"",
    type:"",
    loading: true,
  };

  componentDidMount = async () => {
    let url=process.env.REACT_APP_URL
    try {
      let response = await fetch(
       url +"?Type="+this.props.type
      );
      let movies = await response.json();
      console.log(movies)
      this.setState({ 
        type:this.props.type, 
        movies:movies,
        loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  render() {
   
    return (
      <Container fluid>
        {this.state.loading && (
          <div className="font-bold d-flex justify-content-center">
            <span>Feching Movies</span>
            <Spinner animation="border" variant="success" />
          </div>
        )}
        <h1 style={{ marginLeft: 85 }}>{this.state.type}</h1>
        <Carousel itemsToShow={4}>
          {this.state.movies.map((movie, index) => (
            
           
           
            <Row key={index}>
              <Card
                className="d-flex justify-content-center mt-2 mb-5"
                style={{ width:"28rem height: 20em "}}
                md={4}
                lg={3}
                onClick={() => this.props.history.push('/details/' + movie.imdbID)}
                
              >
                <Card.Img
                  variant="top"
                  style={{ objectFit: "cover" , height: 400 }}
                  src={movie.Poster}
                  className="mx-auto"
                />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Type}</Card.Text>
                  <Card.Text className="text-muted">{movie.Year}</Card.Text>
                </Card.Body>
              
              </Card>
            </Row>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default Gallery2;
