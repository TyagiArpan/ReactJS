import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const auth = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authentication && auth !== authentication) { //if authentication is required by Page but user is not authenticated
            navigate('/login')
        } else if (!authentication && auth !== authentication) { //if authentication is not required by Page but user is authenticated
            navigate('/')
        }
        setLoader(false)
    }, [navigate, authentication, auth])

  return (
    loader ? <h1>Loading.....</h1> : <>{children}</> 
  )
}

export default Protected