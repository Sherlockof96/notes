import Cookie from 'js-cookie'
import { useEffect } from 'react'
import checkLoggedIn from '@/pages/api/checkLoggedIn';

let router = "https://kavishdoshi.com"

const checkloginuser = async () => {
    const userId = Cookie.get('UserId') ? Cookie.get('UserId') : "-1";
        const response = await fetch(checkLoggedIn, {
            method : 'POST',
            body : userId
          });
        const data = await response.text();
        console.log(data);
        let loggedIn = data;

        if (loggedIn == "false")
        {
            if (router == undefined)
            {
                router = "https://kavishdoshi.com"
            }
            Cookie.set('redirectURL', router, { expires: 1 , domain: '.kavishdoshi.com'})
            window.location.href = "https://login.kavishdoshi.com/login"
        }

        if (loggedIn != "admin")
        {
            if (router == undefined)
            {
                router = "https://kavishdoshi.com"
            }
            Cookie.set('redirectURL', router, { expires: 1 , domain: '.kavishdoshi.com'})
            window.location.href = "https://login.kavishdoshi.com/login"
        }
}


const CheckLoggedIn = ({route}) => {
    useEffect(() => {
        router = route;
        checkloginuser();

    }, [])
}

export default CheckLoggedIn