import './Nav.css';
const Nav = ({ Icon, title,onClick}) => {
  return (
    <div className='nav'>
      {Icon && <Icon className='icon' onClick={onClick} />}
      <h2>{title ? title : null}</h2>
    </div>
  )
}
export default Nav
