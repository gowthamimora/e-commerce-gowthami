import React from "react";
import {Row,Col,Button} from 'react-bootstrap';
import './styles.css';
import {isEmpty} from 'lodash';
import Sort from "./Sort/Sort";
import SORT_TYPES from "./SortTypes";

export default function ProductDisplaySection(props) {

    const [sortOrder, updateSortOrder]=React.useState(SORT_TYPES.RELEVANCE);

    const renderBook = (book) => {
        return (
            <article key={book.title} className="descArticle">
                <img className="img" height="100px" width="100px" src={book.imgUrl}/>
                <Col className="rowDetails">
                    <Row>
                        <td width="350px">Title-{book.title}</td>
                    </Row>
                    <Row>
                        <td width="350px">Author-{book.author}</td>
                    </Row>
                    <Row>
                        <td width="350px">Price-{book.price}</td>
                    </Row>
                    <Row>
                        <td width="350px">Pages-{book.pages}</td>
                    </Row>
                    <Row>
                        <Button className="colorBtn">
                            Buy
                        </Button>
                    </Row>
                </Col>
            </article>
        );
    }

    const highToLowComparator = (priceOne, priceTwo) => {
        return priceTwo - priceOne;
    }

    const lowToHighComparator = (priceOne, priceTwo) => {
        return priceOne - priceTwo;
    }

    const sortByOrder = (bookOne, bookTwo) => {
        if (sortOrder === SORT_TYPES.LOW_TO_HIGH) {
            return lowToHighComparator(bookOne.price, bookTwo.price);
        } else if (sortOrder === SORT_TYPES.HIGH_TO_LOW) {
            return highToLowComparator(bookOne.price, bookTwo.price);
        } else {
            return 0;
        }
    }

    const getFilteredBooks = () => {
        if (isEmpty(props.filteredAuthors)) {
            return [...props.books];
        }
        return [...props.books].filter((book) => {
            return props.filteredAuthors.indexOf(book.author) !== -1
        });
    }

    return(
        <div>
            <div className="sortCard">
                <Sort updateSortOrder={updateSortOrder}/>
            </div>
            <section>
                { getFilteredBooks().sort(sortByOrder).map(renderBook) }
            </section>
        </div>
    )
}