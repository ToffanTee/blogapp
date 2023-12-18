import BlogCard from "../BlogsComponents/BlogCard";
import { Container, Row } from "react-bootstrap";
import styles from "../HomeComponents/Home.module.css";

const RecentBlogs = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <h1 className={`text-center mb-5 ${styles.recent_text}`}>
          Recent blogs
        </h1>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Row>
    </Container>
  );
};

export default RecentBlogs;
