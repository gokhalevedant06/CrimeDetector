import {useCallback} from  'react';
import axios from '../utils/axios';


const useAdmins = () => {
    const alertAuthorities = useCallback(async (authorities)=>{
        for (const authority of authorities){
            const data = {
                phoneNumber:authority.phone
            };
            const res = await axios.post('/admin/sms',data);
        }
    },[])

    return {
        alertAuthorities
    }
}


export default useAdmins;
