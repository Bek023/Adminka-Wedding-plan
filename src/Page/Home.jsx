import { useNavigate } from "react-router-dom"


export default function Home ({}){

    const navigate = useNavigate();

    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}} >
            <div style={{}}  >
                <button onClick={()=> navigate('/admin')} >Admin</button>
                <button onClick={()=> navigate('/user')} >User</button>
            </div>
        </div>
    )
}