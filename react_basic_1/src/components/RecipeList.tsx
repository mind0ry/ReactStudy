import {useState,useEffect} from "react";
import axios from "axios";
import {Recipe, RecipeProps} from "../types";

function RecipeList() {
    const [curpage, setCurpage] = useState<number>(1);
    const [data, setData] = useState<RecipeProps>();

    useEffect(() => {
        axios.get(`http://localhost/recipe/list_react/${curpage}`)
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
    }, [curpage]);

    const prev=():void => {
        if(data) {
            setCurpage(data.startPage-1);
        }
    }
    const next=():void => {
        if(data) {
            setCurpage(data.endPage+1);
        }
    }
    const pageChange=(page:number):void => setCurpage(page);

    const pageArr=[]
    // data != null && data.startPage != undefined
    if(data && data?.startPage > 1) {
        pageArr.push(
            <li><a className={"nav-link"} onClick={prev}>&laquo;</a></li>
        )
    }

    if(data) {
        for(let i:number=data.startPage;i<=data.endPage;i++) {
            pageArr.push(
                <li><a className={"nav-link"} onClick={() => pageChange(i)}>{i}</a></li>
            )
        }
    }

    if(data && data?.endPage < data.totalpage) {
        pageArr.push(
            <li><a className={"nav-link"} onClick={next}>&raquo;</a></li>
        )
    }

    const html:any=data?.list.map((recipe:Recipe)=>
        <div className="col-md-3">
            <div className="thumbnail">
                <a href="#">
                    <img src={recipe.poster}
                         style={{"width":"240px", "height":"150px"}}
                            title={recipe.title}/>
                    <div className="caption">
                        <p>{recipe.chef}</p>
                    </div>
                </a>
            </div>
        </div>
    )

    return (
        <div className={"container"}>
            <div className={"row"}>
                {html} {/* HTML을 출력 */}
            </div>
            <div className="row text-center" style={{"height": "20px"}}>
                <ul className={"pagination"}>
                    {pageArr}
                </ul>
            </div>
        </div>
    )
}
export default RecipeList;