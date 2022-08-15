// Layouts
import {HeaderOnly} from '~/layout'

// Pages
import Home from '~/pages/home'
import Following from '~/pages/following'
import Profile from '~/pages/profile'
import Upload from '~/pages/upload'
import Search from '~/pages/search'
import Live from '~/pages/live'

import config from '~/config'


//Public routes
const publicRoutes=[
    {path:config.routes.home,component:Home},
    {path:config.routes.following,component:Following},
    // Xem xây dựng Logic phần Header #2 35:28
    {path:config.routes.profile,component:Profile},
    {path:config.routes.live,component:Live},
    {path:config.routes.upload,component:Upload, layout:HeaderOnly},
    {path:config.routes.search,component:Search,layout:null},
]

const privateRoutes=[  //Phải đăng nhập mới vào được, còn không sẽ chuyển qua login
    
]

export {publicRoutes,privateRoutes}