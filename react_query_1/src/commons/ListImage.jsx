import {Link} from 'react-router-dom'

function ListImage({info, index,move}) {
    let link=''
    if(move==='food') {
        link=<Link to={`/food/detail/${info.fno}`}>
            <img src={info.poster} alt="Lights" style={{"width":"250px", "height":"200px"}} />
            <div className="caption">
                <p>{info.title}</p>
            </div>
        </Link>
    } else if(move==='recipe') {
        link=<Link to={`/recipe/detail/${info.no}`}>
            <img src={info.poster} alt="Lights" style={{"width":"250px", "height":"200px"}} />
            <div className="caption">
                <p>{info.title}</p>
            </div>
        </Link>
    }
    return (
        <div className="col-md-3" key={index}>
            <div className="thumbnail">
                {link}
            </div>
        </div>
    )
}

export default ListImage;