import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router';

function renderDropdownButton(title, i, list) {
    return (
        <DropdownButton
            title={title}
            key={i}
            id={`dropdown-basic-${i}`}
        >
            {
                list.map((value) =>
                    <MenuItem>
                        <Link to={"/" + title + "/" + value}>{value}</Link>
                    </MenuItem>
                )
            }
        </DropdownButton>
    );
}

export default renderDropdownButton;
