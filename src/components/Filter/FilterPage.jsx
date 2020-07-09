import React from "react";
import AuthorCheckboxLabels from "./AuthorCheckboxLabels";


export default function FilterPage(props) {
    return(
        <div>
            <div>
                <h5>Filters</h5>
                <hr/>
            </div>
            <div>
                <h6>Authors</h6>
                    <AuthorCheckboxLabels
                        authors={props.authors}
                        addAuthor={props.addAuthor}
                        removeAuthor={props.removeAuthor}
                    />
                <hr/>
            </div>
        </div>

    )

}