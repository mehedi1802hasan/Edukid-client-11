import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`EduKid | ${title}`
    },[title])
};
export default useTitle