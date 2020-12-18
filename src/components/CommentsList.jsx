import React from 'react'
import {Spinner,ListGroup } from 'react-bootstrap'
import { BsPencil } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';



class CommentsList extends React.Component {
    state = {
        comments: [],
        loading:true,
        
    }

    componentDidMount = async () => {
       
        this.fetchComments()
    }


    fetchComments= async () => {
        let url=process.env.REACT_APP_URL
        
       
        try {
            console.log(this.props.id)
            let response = await fetch(url+`/${this.props.id}/reviews`)
            if (response.ok) {
             
                let body= await  response.json()
                this.setState({comments:body ,loading:false})
                console.log("comments",body)

             
            } else {
                console.log('an error occurred')
                let error = await response.json()
                this.setState({
                    errMessage: error.message,
                    loading: false,
                })
            }
        } catch (e) {
            console.log(e) // Error
          
        }
    }

    componentDidUpdate = (previousProps) => {
   
        if (previousProps.id!== this.props.id) { 
            this.fetchComments()
        }
    }
    

    render() {
        return (
            
            <div className="mb-5">
                <h2>Reviews</h2>
                {
                    this.state.loading && (
                        <div className="font-bold d-flex justify-content-center">
                            <span>LOADING REVIEWS</span>
                            <Spinner animation="border" variant="success" />
                        </div>
                    )
                }
              {this.state.comments.map((comments, index) => (
                    <div key={index} >
                        <p>
                            Comment: {comments.comment},
                            Rate{comments.rate}
                            {console.log(comments.comment)}
                            
                        </p>
                        <BsPencil /> <AiFillDelete /> 
                    </div >
                    ))}
                
               
                   </div>         
               
           
        )
    }
}

export default CommentsList