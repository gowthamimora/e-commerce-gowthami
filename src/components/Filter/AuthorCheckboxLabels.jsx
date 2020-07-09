import React from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



export default function AuthorCheckboxLabels(props) {
    const handleChange = (event) => {
        if(event.target.checked){
            props.addAuthor(event.target.name);
        } else{
            props.removeAuthor(event.target.name);
        }
    };

    const getFormLabel = (author) => {
        return (
            <FormControlLabel
                control={
                    <Checkbox
                        onChange={handleChange}
                        name={author}
                        color="primary"
                    />
                }
                key={author}
                label={author}
            />
        );
    }

    return (
        <FormGroup>
            { props.authors.map(getFormLabel) }
        </FormGroup>
    );
}