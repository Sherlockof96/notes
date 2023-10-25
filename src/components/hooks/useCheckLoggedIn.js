import Cookie from 'js-cookie'
import { useEffect } from 'react'
import checkLoggedIn from '@/pages/api/checkLoggedIn';


const CheckLoggedIn = ({route}) => {
    useEffect(async () => {
        
        const userId = Cookie.get('UserId') ? Cookie.get('UserId') : "-1";
        const response = await fetch(checkLoggedIn, {
            method : 'POST',
            body : userId
          });
        const data = await response.text();
        console.log(data);
        let loggedIn = data;
        // if (Cookie.get('Auth') == 'Allowed')
        // {
        //     loggedIn = "true"
        // }
        if (loggedIn == "false")
        {
            if (route == undefined)
            {
                route = "https://kavishdoshi.com"
            }
            Cookie.set('redirectURL', route, { expires: 1 , domain: '.kavishdoshi.com'})
            window.location.href = "https://login.kavishdoshi.com/login"
        }
    }, [])
}

export default CheckLoggedIn