import React from 'react'
import { Badge, Card, Col, Container, Row ,Spinner} from 'react-bootstrap'
import CommentsList from './CommentsList'
import AddComment from './AddComment'



class MovieDetails extends React.Component {
    state = {
      id:null,
      movie:{},
      loading:true
     
    }


    
    

    componentDidMount =async () => {
       

        let id =this.props.match.params.id
      

        this.setState ({id:id}, async () =>{ 
             console.log(id,this.state.id)
            try {
                let response = await fetch(
                  "http://www.omdbapi.com/?&i=" +
                    this.state.id +"&apikey=ee4589ef&type="
                    
                );
                let movie = await response.json();
                this.setState ({movie:movie, loading:false})
                console.log(movie)
               
              } catch (error) {
                this.setState ({loading:false})
                console.log(error);
              
              }
           })

       
       

    

    }



    render() {
        return (
        
            <Container>
                <div><h1>{this.props.title} </h1></div>

                {this.state.loading && (
          <div className="font-bold d-flex justify-content-center">
            <span>Feching Movie</span>
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {!this.state.movie && (
          <div className="font-bold d-flex justify-content-center">
            <h1>LOADING</h1>
          </div>
        )}

         
              
                    <div>
                        <Row className="my-5">
                            <Col md={3}>
                                <img src={ this.state.movie.Poster} alt="movie" className="img-fluid" />
                            </Col>
                            <Col md={9}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{this.state.movie.Title} <Badge variant="danger">{this.state.movie.imdbRating}</Badge></Card.Title>
                                        
                                        <Card.Text>
                                            {this.state.movie.Plot}
                                      
                                        </Card.Text>
                                        <Card.Text>
                                            
                                            Country:{this.state.movie.Country}
                                     
                                        </Card.Text>
                                        <Card.Text>
                                            
                                           
                                            Year:{this.state.movie.Year}
                                          
                                        </Card.Text>
                                        <Card.Text>
                                     
                                            Genre:{this.state.movie.Genre}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        
                        <CommentsList  id={this.state.movie.imdbID}/>
                        <AddComment elementId={this.state.movie.imdbID} />
                        
                    </div> 
                     
                
            </Container>
           
        )
    }
}

export default MovieDetails