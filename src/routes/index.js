// Layouts
import {HeaderOnly} from '~/Component/Layout'

// Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

 import routesConfig from '~/config/routes'


//Public routes
const publicRoutes=[
    {path:routesConfig.home,component:Home},
    {path:routesConfig.following,component:Following},
    // Xem xây dựng Logic phần Header #2 35:28
    {path:routesConfig.profile,component:Profile},
    {path:routesConfig.upload,component:Upload, layout:HeaderOnly},
    {path:routesConfig.search,component:Search,layout:null},
]

const privateRoutes=[  //Phải đăng nhập mới vào được, còn không sẽ chuyển qua login
    
]

export {publicRoutes,privateRoutes}