import {HeaderOnly} from '~/Component/Layout'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'

const publicRoutes=[
    {path:'/',component:Home},
    {path:'/following',component:Following},
    // Xem xây dựng Logic phần Header #2 35:28
    {path:'/@:nickname',component:Profile}, 
    {path:'/upload',component:Upload, layout:HeaderOnly},
]

const privateRoutes=[  //Phải đăng nhập mới vào được, còn không sẽ chuyển qua login
    
]

export {publicRoutes,privateRoutes}