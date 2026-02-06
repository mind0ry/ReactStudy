import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect, useRef} from "react";
import {useNavigate,useParams} from "react-router-dom";
import {boardReset, boardDelete} from "../actions/boardActions";
/*
    function BoardDelete(){}
    const BoardDelete=function(){}
    const BoardDelete=()=>{}
    = function을 데이터형으로 인식
 */

const BoardDelete = () => {

    const {no}=useParams()
    const dispatch = useDispatch()
    const nav=useNavigate()
    const [pwd,setPwd]=useState('')
    const pwdRef = useRef(null)
    const cancel=()=>{
        nav('/board/detail/'+no)
    }

    const del=()=>{
        if(pwd.trim()==="") {
            pwdRef.current.focus()
            return
        }
        dispatch(boardDelete(no,pwd))
    }
    const delData=useSelector((state)=>state.boards.result)
    useEffect(()=> {
        if(delData==='yes') {
            nav('/board/list')
            dispatch(boardReset())
        } else if(delData==='no') {
            alert("비밀번호가 틀립니다")
            setPwd('')
            pwdRef.current.focus()
        }
    }, [delData])

    return(
        <div className="container">
            <div className="row" style={{"width":"400px"}}>
                <h3 className={"text-center"}>삭제하기</h3>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td className={"text-center"}>
                            비밀번호:<input type={"password"} value={pwd}
                            onChange={(e)=>setPwd(e.target.value)}
                            size={15} className={"input-sm"} ref={pwdRef}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center"}>
                            <button className={"btn-sm btn-danger"} onClick={del}>삭제</button>
                            <button className={"btn-sm btn-danger"} onClick={cancel}>취소</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BoardDelete;