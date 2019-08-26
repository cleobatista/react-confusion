import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'react-moment';

class DishDetail extends Component {
	constructor(props) {
		super(props);
	}	

	renderComments(comments) {
		if (comments != null) {
			const rendered_comments = comments.map((comment) => {
				return <li key={comment.id} ><p>{comment.comment}</p>
				<p>-- {comment.author}, <Moment format="MMM DD, YYYY">{comment.date}</Moment></p>
				</li>;
			});
			return(
				<div>
					<h4>Comments</h4>
					<ul className="list-unstyled">
					 {rendered_comments}
					</ul>
				</div>
			)
		}
		else
			return <div></div>
	}

	renderDish(dish) {
		return(
			<Card>
	      <CardImg top src={dish.image} alt={dish.name} />
	      <CardBody>
	        <CardTitle>{dish.name}</CardTitle>
	        <CardText>{dish.description}</CardText>
	      </CardBody>
	    </Card>
		);
	}

	render() {
		const dish = this.props.dish;
		return (
			<div className="row">
				<div className="col-12 col-md-5 m-1">
		      {this.renderDish(dish)}
				</div>
				<div className="col-12 col-md-5 m-1">
					{this.renderComments(dish.comments)}
				</div>
			</div>
    );
	}
}

export default DishDetail;