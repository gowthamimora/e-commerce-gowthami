import React from "react";
import { Container,Row,Col } from 'react-bootstrap';
import { default as booksCatalog } from "./../books.json";
import './styles.css'
import FilterPage from "./Filter/FilterPage";
import ProductDisplaySection from "./ProductDisplaySection/ProductDisplaySection";

export default function ECommerce() {

    const [selectedAuthors, updateAuthors]=React.useState([]);

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
        const authors = booksCatalog.map(function (book){
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
                            <ProductDisplaySection books={booksCatalog} filteredAuthors={selectedAuthors}/>
                        </div>
                </Col>
            </Row>
        </Container>

    )
}