import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'react-moment';

	function renderComments(comments) {
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

	function renderDish(dish) {
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

	const DishDetail = (props) =>{
		const dish = props.dish;
		if (dish != null) {
			return (
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-5 m-1">
				      {renderDish(dish)}
						</div>
						<div className="col-12 col-md-5 m-1">
							{renderComments(dish.comments)}
						</div>
					</div>
				</div>
	    );
		}
		else
			return <div></div>

	}

export default DishDetail;