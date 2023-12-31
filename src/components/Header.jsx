
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className="flex justify-between  h-14 border-[0.9px] focus-within:border-white hover:border-white  items-center" >
      <ul className='text-white flex flex-wrap gap-16 ml-[6rem]'>
        <li>
          <NavLink to='/'
          className={({isActive})=>`${isActive?  "text-blue-200":"text-white line-through  hover:no-underline"}`}>
            HOME
          </NavLink>
        </li>
        <li>
        <NavLink to='/user'
          className={({isActive})=>`${isActive?  "text-blue-200 ":"text-white line-through hover:no-underline"}`}>
            USERS
          </NavLink>
        </li>
        <li>
        <NavLink to='/pics'
          className={({isActive})=>`${isActive?  "text-blue-200":"text-white line-through hover:no-underline "}`}>
            PICS 
          </NavLink>
        </li>
      </ul>
      <div className='text-black  m-2 '>
        <NavLink  to='/signup'className={({isActive})=>` ${isActive?"text-white":"text-blue-200"} px-1 py-2  border-[1.2px]  font-mono font-medium rounded-l-lg`} >Get Started</NavLink>
        <NavLink to='/login' className={({isActive})=>` ${isActive?"text-white":"text-blue-200"} px-1 py-2  border-[1.2px]  font-mono font-medium rounded-r-lg`}>Let's Continue</NavLink>
      </div>
    </div>
    </>
  )
}

export default Header