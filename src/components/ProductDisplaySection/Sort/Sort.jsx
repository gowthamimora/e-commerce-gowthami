import React from "react";
import {Button} from '@material-ui/core'
import SORT_TYPES from "../SortTypes";

export default function Sort(props) {
    return(
        <div>
            <div className="divDisplayRow">
                <h5 className="marginTop1Per">Sort By</h5>
                <Button
                    color="primary"
                    className="marginLeft2Per"
                    onClick={() => props.updateSortOrder(SORT_TYPES.RELEVANCE)}
                >
                    Relevance
                </Button>
                <Button
                    color="primary"
                    className="marginLeft2Per"
                    onClick={() => props.updateSortOrder(SORT_TYPES.LOW_TO_HIGH)}
                >
                    Price--Low to High
                </Button>
                <Button
                    color="primary"
                    className="marginLeft2Per"
                    onClick={() => props.updateSortOrder(SORT_TYPES.HIGH_TO_LOW)}
                >
                    Price--High to Low
                </Button>
            </div>

        </div>
    )

}