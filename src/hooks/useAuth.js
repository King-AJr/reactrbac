import { useContext } from "react";
import {AuthContext} from "../Context/authProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;