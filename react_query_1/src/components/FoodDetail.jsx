import {useParams,useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../http-commons";

function FoodDetail() {
    const {fno}=useParams()
    const nav=useNavigate(); // 화면 이동
    const {isLoading, isError, error, data}=useQuery({
        queryKey:['food_detail'+fno],
        queryFn: async ()=>{
            return await apiClient.get(`/food/detail_react/${fno}`);
        }
    })

    if(isLoading){
        return <div className={"text-center"}>서버에서 데이터 전송 지연중</div>
    }
    if(isError){
        return <div className={"text-center"}>서버에서 Error발생: {error}</div>
    }

    return (
        data.data &&
        <div className={"container"}>
            <div className={"row"}>
                <table className="table">
                    <tbody>
                    <tr>
                        <td className={"text-center"} rowSpan={8} width={"30%"}>
                            <img src={data.data.poster} style={{"width":"350px", "height":"350px"}} />
                        </td>
                        <td colSpan={2}>
                            <h3>{data.data.name}&nbsp;<span style={{"color":"orange"}}>{data.data.score}</span> </h3>
                        </td>
                    </tr>
                    <tr>
                        <th className={"text-center"} width={"10%"}>주소</th>
                        <td width={"60%"}>{data.data.address}</td>
                    </tr>
                    <tr>
                        <th className={"text-center"} width={"10%"}>전화</th>
                        <td width={"60%"}>{data.data.phone}</td>
                    </tr>
                    <tr>
                        <th className={"text-center"} width={"10%"}>음식종류</th>
                        <td width={"60%"}>{data.data.type}</td>
                    </tr>
                    <tr>
                        <th className={"text-center"} width={"10%"}>가격대</th>
                        <td width={"60%"}>{data.data.price}</td>
                    </tr>
                    <tr>
                        <th className={"text-center"} width={"10%"}>영업시간</th>
                        <td width={"60%"}>{data.data.time}</td>
                    </tr>
                    <tr>
                        <th className={"text-center"} width={"10%"}>주차</th>
                        <td width={"60%"}>{data.data.parking}</td>
                    </tr>
                    <tr>
                        <th className={"text-center"} width={"10%"}>테마</th>
                        <td width={"60%"}>{data.data.theme}</td>
                    </tr>
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>{data.data.content}</td>
                    </tr>
                    <tr>
                        <td className={"text-right"}>
                            <button className={"btn-sm btn-warning"} onClick={()=>nav(-1)}>목록</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default FoodDetail;