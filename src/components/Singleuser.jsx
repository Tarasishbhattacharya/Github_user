import "./Github.css"
export const Singleuser=({data})=>{
    return (
        <div className="container">
            <div className="name">{data.login}</div>
            <div className="user_img">
              <img src={data.avatar_url} alt ="user"/>
            </div>
        </div>
    )
}