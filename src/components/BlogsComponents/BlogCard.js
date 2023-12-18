import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Col lg={4} className="mb-4">
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to={""}>Read more...</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
