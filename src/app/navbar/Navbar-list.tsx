
export default function Navbar() {
    return(
            <nav>
            <NavbarList/>
            </nav>
    )
}
function NavbarList() {
    const navList =[
        {
            text:"Home",
            path:"/Home",
        },

        {
            text:"product",
            path:"/product",
        },
    ]
    return(
        <ul>
            {navList.map((item) => {
                return(
                    <li>
                        <a href="{item.path">{item.text}</a>
                    </li>
                )
            }
         )}
        </ul>
    )
}