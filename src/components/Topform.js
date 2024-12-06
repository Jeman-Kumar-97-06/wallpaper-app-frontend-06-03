import {useState} from 'react';
import {useWallsContext} from '../hooks/useWallsContext';
import {useAuthContext} from '../hooks/useAuthContext';

const Topform = () => {
    const {dispatch}           = useWallsContext();
    const {user}               = useAuthContext();
    const [error,setError]     = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            setError('You must be Logged In!');
            return;
        }
        const fileInput = document.getElementById('wall_pic').files[0];
        const formData  = new FormData();
        formData.append('wall_pic',fileInput);
        const response = await fetch('/api/walls/',{method:'POST',body:formData,headers:{'Authorization':`Beared ${user.token}`}});
        const json     = await response.json();
        if (!response.ok){
            setError(json.error);
        }
        if (response.ok){
            setError(null);
            dispatch({type:"UPLOAD_WALLS",payload:json});
        }
    }

    return (
        <form id="upload_form" onSubmit={handleSubmit} encType="multipart/form-data">
            <div id='input_btn'>
                <input type="file" id='wall_pic' name='wall_pic' placeholder='Upload Wallpaper'/>
                <button type="submit">Submit</button>
            </div>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Topform;