import '../../index.css'
import './boxVideo.css'

function BoxVideo({video, title, text}){
    return(
        <>
            <div id="boxVideo">
                <div id="boxInfoVideo">
                    <h1 className="title" id="titleVideo">{title}</h1>
                    <p id="textVideo">{text}</p>
                </div>
                <iframe id="video" src={video} title="YouTube video player" frameborder="0"></iframe>
            </div>
        </>
    )
}

export default BoxVideo