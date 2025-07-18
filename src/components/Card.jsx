import { useNavigate } from "react-router-dom"

function Card({data}){
  const navigate = useNavigate();

  return(
    <div className="col-md-4" onClick={() => {
      navigate('/detail/' + data.id)
    }}>
      <img src={`${import.meta.env.BASE_URL}image/${data.title}.jpg`} alt="" width='100%' />
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <span>👍{data.like}</span>
      </div>
  )
}

export default Card