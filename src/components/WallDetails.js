import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";


const WallDetails = ({wall}) => {
    const [error,setError] = useState(null);
    const {user}           = useAuthContext();

    const handleDownload = async () => {
        if(!user){
            setError("You must be logged in :(");
            return;
        }
        const resp = await fetch('/api/walls/download/'+wall._id,{headers:{'Authorization':`Bearer ${user.token}`}});
        const blob = await resp.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = "download";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
    return (
        <div className='wall_details'>
            <img src={wall.wall} id='each_wall_img' alt="wallpaper_missing :("/>
            <button id='download_button' onClick={handleDownload}><span className="material-icons">download</span></button>
        </div>
    )
};

export default WallDetails;