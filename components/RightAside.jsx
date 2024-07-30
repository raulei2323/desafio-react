import Link from "next/link"

export default function RightAside (){
    const trending = [
        {text: "Secure Access to Connected Devices"},
        {text: "Weekly Watercooler Thread"},
        {text: "Leadership- food for thought"}
    ]

    return(

        <aside className="grid grid-rows">

            <p>#discuss</p>
            {
                trending
                .map((trend) => {
                    return(
                        <span key={`trend-item-${trend.text}`} className="trend-item p-2">
                            {trend.text}
                        </span>
                    )
                })
    
            }
        </aside>
    )

}