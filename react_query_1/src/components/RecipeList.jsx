import {useState} from 'react'
import {useQuery} from "@tanstack/react-query";
import ListImage from "../commons/ListImage";
import PagePrint from "../commons/PagePrint"
import apiClient from "../http-commons";

function RecipeList() {
    const [curpage, setCurpage] = useState(1);
    const {isLoading, isError, error, data}=useQuery({
        queryKey: ["recipe_list"+curpage],
        queryFn: async () => {
            return await apiClient.get(`/recipe/list_react/${curpage}`)
        }
    })

    if(isLoading) {
        return <h1 className={"text-center"}>Loading...</h1>
    }
    if(isError) {
        return <h1 className={"text-center"}>{error}</h1>
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                {
                    data.data.list && data.data.list.map((recipe, index) =>
                        <ListImage info={recipe} index={index} move={"recipe"}/>
                    )
                }
            </div>
            <div className={"row text-center"} style={{"marginTop":"10px"}}>
                <PagePrint data={data.data} setCurpage={setCurpage} />
            </div>
        </div>
    )

}
export default RecipeList