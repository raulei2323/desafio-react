import Link from "next/link";

export default function AsideMenu () {
    const menuItems = [
        {icon: "🏠", text: "Home", href: "https://dev.to/"},
        {icon: "🎙️", text: "Podcast", href: "https://dev.to/pod"},
        {icon: "🎥", text: "Videos", href: "https://dev.to/videos"},
        {icon: "🏷️", text: "Tags", href: "https://dev.to/tags"},
        {icon: "💡", text: "DEV Help", href: "https://dev.to/help"}
    ]
    const otherItems = [
        {icon: "👍", text: "Code of conduct", href: "https://dev.to/code-of-conduct"},
        {icon: "🧐", text: "Privacy Policy", href: "https://dev.to/privacy"},
        {icon: "👀", text: "Terms of use", href: "https://dev.to/terms"}
    ]
    return(
        <aside className="grid grid-rows">
            {
                menuItems
                .map((item) => {
                    return(
                        <Link href={item.href} key={`menu-item-${item.text}`} className="menu-item p-2">
                            <span href={item.href}>{item.icon}</span>
                            <span>{item.text}</span>
                        </Link>
                        
                    )
                }

                )
            }
            <span className="font-bold">Other</span>
            {
                otherItems
                .map((item) => {
                    return(
                        <Link href={item.href} key={`other-item-${item.text}`} className="other-item p-2">
                            <span href={item.href}>{item.icon}</span>
                            <span>{item.text}</span>
                        </Link>
                        
                    )
                }

                )
            }
        </aside>
    )

}