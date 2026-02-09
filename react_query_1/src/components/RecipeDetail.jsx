import {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";

function RecipeDetail() {

    const {no}=useParams();

    return (
        <div className={"container"}>
            <div className={"row"}>
                <h3 className={"text-center"}>
                    Recipe:{no}
                </h3>
            </div>
        </div>
    )
}
export default RecipeDetail;