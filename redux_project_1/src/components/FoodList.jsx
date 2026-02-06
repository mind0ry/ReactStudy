import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {fetchFoodList} from "../actions/foodActions";
import {Link} from "react-router";
function FoodList() {
    // 처리
    const [curpage, setCurpage] = useState(1);
    const dispatch = useDispatch(); // Action 함수
    useEffect(() => {
        dispatch(fetchFoodList(curpage));
    },[curpage]);
    /*
      state : food , recipe , seoul , board
               |
              foods : food_list,food_detail
                          |
                       list,curpage....
     */
    const food_list=useSelector(state => state.foods.food_list.list);
    const totalpage=useSelector(state => state.foods.food_list.totalpage)
    const startPage=useSelector(state => state.foods.food_list.startPage)
    const endPage=useSelector(state => state.foods.food_list.endPage)

    // food_list => Map으로 전송된 모든 값
    const pageChange=(page) => {
        setCurpage(page);
    }
    const prev=(page) => {
        setCurpage(startPage-1);
    }
    const next=(page) => {
        setCurpage(endPage+1);
    }

    const row=[]

    if(startPage>1) {
        row.push(
            <li><a className={"a-link"} onClick={prev}>&laquo;</a></li>
        )
    }

    for(let i=startPage;i<=endPage;i++){
        row.push(
            <li className={i===curpage?"active":""} onClick={()=>pageChange(i)}><a className={"a-link"}>{i}</a></li>
        )
    }

    if(endPage<totalpage) {
        row.push(
            <li><a className={"a-link"} onClick={next}>&raquo;</a></li>
        )
    }


    return (
        <div className="container">
            <div className="row">
                {
                    food_list &&
                    food_list.map((food,index) =>
                        <div className="col-md-3" key={index}>
                            <div className="thumbnail">
                                <Link to={`/detail/${food.fno}`}>
                                    <img src={food.poster}  style={{"width":"250px","height":"200px"}} />
                                    <div className="caption">
                                        <p>{food.name}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="row text-center" style={{"marginTop":"10px"}}>
                <ul className="pagination">
                    {row}
                </ul>
            </div>
        </div>
    )
}
export default FoodList