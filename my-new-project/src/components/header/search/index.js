import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import './style.css';

function Search({props}) {


    return (
        <div className="search" style={{ width: 300}}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={props.map((option) => option.title)}
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    margin="normal"
                    variant="outlined"
                    InputProps={{...params.InputProps, type: 'search' }}
                />
                )}
            />
        </div>
    )
}

export default Search;
