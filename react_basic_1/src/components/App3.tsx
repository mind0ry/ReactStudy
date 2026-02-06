import {useState, Fragment, useEffect, ReactElement} from "react";
// 배열
function App3() {
    const [img, setImg] = useState<string[]>()
    const images:string[]=[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lFrkY8nsfr3B9vTKDuTfISkOjmwMNeKkk8jip4jW_NbnEh8svw43Zk_brwqmnoaI24DXtP6kWFY4VflSExxq-JfiF8x-y2xatek9zwbWjA&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKzXt42nMJQn5i9swANpss2t1igYa17wT1-IMpXpeZuSN94tsbKgXt4QHWooCniWAGtq-qSvNAV26RWUlVJodMydPOGr0lEC-tnNWOVnk4Q&s=10",
        "https://upload.wikimedia.org/wikipedia/commons/0/0d/Jeong_Hyeong-don_from_acrofan.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIleMnQD-iuwMk5vqLiQBX4T8ZsOkI4yWpoLuw55RXIKqVMlKCfdD6aZk77jP3O_aJUjP88XbsKQUrqEPeb7vnCopdxdMlWzAQXEZNzOFrQ&s=10"
    ]

    useEffect(() => {
        setImg(images)
    })
    /*
            Element   DOM (document.createElement()) 일반 태그
            JSX.Element JSX변환
            ReactElement React 컴포넌트 반환
     */


    // const html:ReactElement[]|undefined = img?.map((mudo:string):ReactElement =>
    //     <img
    //         src={mudo} style={{"width":"150px", "height":"200px"}}
    //     />
    // )

    const html=img?.map((mudo:string) =>
         <img
             src={mudo} style={{"width":"150px", "height":"200px"}}
         />
    )

    return (
        <Fragment>
            {html}
        </Fragment>
    )


}
export default App3;