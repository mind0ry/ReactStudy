import {useState, useEffect} from "react";
import {useQuery} from "@tanstack/react-query"
import apiClient from "../http-commons"
import List from "../commons/ListImage"
import ListImage from "../commons/ListImage";
import PagePrint from "../commons/PagePrint";

function FoodList() {
    // 데이터 읽기 => ListImage
    // 변수
    const [curpage, setCurpage] = useState(1);
    // react-Query 연동 [curpage[
    /*
        useEffect(()=>{

        }, [])
     */
    const {isLoading, isError, error, data} = useQuery({
        queryKey: ["food_list"+curpage],
        queryFn: async ()=>{
            return await apiClient.get(`/food/list_react/${curpage}`)
        }
    })
    console.log(data)
    if(isLoading)
        return <h1 className="text-center">Loading...</h1>
    if(isError)
        return <h1 className="text-center">{error}</h1>
    return (
        <div className={"container"}>
            <div className={"row"}>
                {
                    data.data.list && data.data.list.map((item, index) =>
                        <ListImage info={item} key={index} move={"food"}/>
                    )
                }
            </div>
            <div className={"row text-center"} style={{"marginTop":"10px"}}>
                <PagePrint data={data.data} setCurpage={setCurpage} />
            </div>
        </div>
    )
}
export default FoodList;