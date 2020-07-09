import React, { useEffect } from "react";
import { Container,Row,Col } from 'react-bootstrap';
import './styles.css'
import FilterPage from "./Filter/FilterPage";
import ProductDisplaySection from "./ProductDisplaySection/ProductDisplaySection";

const BOOKS_API = 'http://localhost:4000/books';
export default function ECommerce() {

    const [selectedAuthors, updateAuthors]=React.useState([]);
    const [books, updateBooks]=React.useState([]);

    useEffect(() => {
        fetch(BOOKS_API)
            .then(response => response.json())
            .then(body => updateBooks(body));
    }, []);

    const addAuthor = (authorName) => {
        updateAuthors([...selectedAuthors, authorName]);
    }

    const removeAuthor = (authorName) => {
        const index = selectedAuthors.indexOf(authorName);
        selectedAuthors.splice(index, 1);
        const newAuthors = selectedAuthors.filter((author) => author !== authorName);
        updateAuthors(newAuthors);
    }

    const getUniqueAuthors = () => {
        const authors = books.map(function (book){
            return book.author;
        });
        return Array.from(new Set(authors));
    };

    return(
        <Container fluid>
            <Row>
                <Col sm={2}>
                    <div className="filterCard">
                        <FilterPage authors={getUniqueAuthors()} addAuthor={addAuthor} removeAuthor={removeAuthor}/>
                    </div>
                </Col>
                <Col sm={10}>
                    <div>
                        <ProductDisplaySection books={books} filteredAuthors={selectedAuthors}/>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}