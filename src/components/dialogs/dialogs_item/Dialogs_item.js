import React from "react";
import { NavLink } from "react-router-dom";

function Dialogs_item(props) {
    return (<>
        <div className="user">
            <NavLink className="names" to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
        </>
    )
}
export default Dialogs_item