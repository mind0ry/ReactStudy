import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {boardList} from "../actions/boardActions";

function BoardList() {
    const [curpage, setCurpage] = useState(1);
    const dispatch = useDispatch();

    // 서버 요청
    useEffect(() => {
        dispatch(boardList(curpage));
    }, [curpage]);/* deps: [] => 한 번만 수행 / deps:[useState변수] => 변수가 변경시 수행*/

    const board_list = useSelector((state) => state.boards.board_list.list);
    const totalpage = useSelector((state) => state.boards.board_list.totalpage);

    // 이벤트 처리
    const prev = () => {
        setCurpage(curpage > 1 ? curpage - 1 : curpage);
        // 자동으로 useEffect 호출
    }

    const next = () => {
        setCurpage(curpage < totalpage ? curpage + 1 : curpage);
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <h3 className={"text-center"}>Redux 게시판</h3>
                <table className={"table"}>
                    <tbody>
                    <td>
                        <Link to={"/board/insert"} className={"btn btn-sm btn-primary"}>새글</Link>
                    </td>
                    </tbody>
                </table>
                <table className={"table table-striped"}>
                    <thead>
                    <tr className={"danger"}>
                        <th className={"text-center"} width={"10%"}>번호</th>
                        <th className={"text-center"} width={"45%"}>제목</th>
                        <th className={"text-center"} width={"15%"}>이름</th>
                        <th className={"text-center"} width={"20%"}>작성일</th>
                        <th className={"text-center"} width={"10%"}>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        board_list && board_list.map((vo, index) =>
                            <tr key={index}>
                                <td className={"text-center"} width={"10%"}>{vo.no}</td>
                                <td width={"45%"}><Link to={"/board/detail/"+vo.no}>{vo.subject}</Link></td>
                                <td className={"text-center"} width={"15%"}>{vo.name}</td>
                                <td className={"text-center"} width={"20%"}>{vo.dbday}</td>
                                <td className={"text-center"} width={"10%"}>{vo.hit}</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td colSpan={5} className={"text-center"}>
                            <button className={"btn btn-sm btn-warning"} onClick={prev}>이전</button>
                            {curpage} page / {totalpage} pages
                            <button className={"btn btn-sm btn-warning"} onClick={next}>다음</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BoardList;