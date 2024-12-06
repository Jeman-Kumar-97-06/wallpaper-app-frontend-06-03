import { useEffect } from "react";
import { useWallsContext } from "../hooks/useWallsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import WallDetails from '../components/WallDetails';

const Home = () => {
    const {walls,dispatch} = useWallsContext();
    const {user}           = useAuthContext();

    useEffect(()=>{
        const fetchAllWalls = async () => {
            const resp  = await fetch('/api/walls/',{headers:{"Authorization":`Bearer ${user.token}`}});
            const walls = await resp.json();
            if (resp.ok)  {
                dispatch({type:"SET_WALLS",payload:walls})
            }
        }
        if (user) {
            fetchAllWalls()
        }
    },[dispatch,user]);

    return (
        <div className="home_page">
            {!walls && <div>Please wait. The server response is slow.😿</div>}
            {
                walls && walls.map(wall=>(
                    wall && <WallDetails key={wall._id} wall={wall}/>
                ))
            }
        </div>
    );
};

export default Home; 