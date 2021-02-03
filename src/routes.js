import Customer from './components/Customer'
import Restaurant from './components/Restaurant'
import Delivery from './components/Delivery'
import Admin from './components/Admin'
import CustomSelect from './components/CustomSelect'

export const routes=[
    {path:'/customer' , component: Customer},
    {path:'/restaurant' , component: Restaurant},
    {path:'/delivery' , component: Delivery},
    {path:'/Admin' , component: Admin},
    {path: '/customer/:id', component:CustomSelect},
    {path:'/restaurant/:id',component:CustomSelect},
    {path:'/delivery/:id',component:CustomSelect}
]