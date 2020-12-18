import React from 'react'
import {  Card, Col, Container, Row,Spinner,Carousel} from 'react-bootstrap'
import CommentsList from './CommentsList'





class TVShows extends React.Component {
    state = {
    
      loading:true,
      movies:[]
     
    }

    componentDidMount = async () => {
        try {
            let response = await fetch(
                "http://www.omdbapi.com/?&s=" +
                  this.props.search +
                  "&apikey=ee4589ef&type=" +
                  this.props.type
             
             
          );

          let movies = await response.json();
          console.log(movies)
          this.setState({ movies: movies.Search, loading: false });
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
            <h1 style={{ marginLeft: 85 }}>{this.state.search}</h1>
            <Row >
              {this.state.movies.map((movie, index) => (
                
               
               
                
                    <Col key={index}>
                  <Card
                    className="d-flex justify-content-center mt-2 mb-5"
                    md={4}
                    lg={3}
                    onClick={() => this.props.history.push('/details/' + movie.imdbID)}
                    
                  >
                    <Card.Img
                      variant="top"
                      style={{ objectFit: "cover", width: 300, height: 400 }}
                      src={movie.Poster}
                      className="mx-auto"
                    />
                    <Card.Body>
                      <Card.Title>{movie.Title}</Card.Title>
                      <Card.Text>{movie.Type}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">{movie.Year}</small>
                    </Card.Footer>
                  </Card>
                  </Col>
               
              ))}
            </Row>
            <CommentsList/>
          </Container>
           
        )
    }
}

export default TVShows