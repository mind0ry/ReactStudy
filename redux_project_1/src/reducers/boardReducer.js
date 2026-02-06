/*
    React : 화면 구현 => MVC구조의 view => 화면 UI
              Redux동작
              1) 사용자 요청
                 dispatch(함수호출)
                       | action에 등록된 함수
                 => useEffect(()=>{})
                 => reducer를 호출하기 위해서는 반드시 dispatch()
                    => vuex : action을 호출 => commit()
 */