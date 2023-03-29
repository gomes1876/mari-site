
interface IconType {
    icon: JSX.Element;
    text: string;
    clicked: boolean;
    // classnameText: 
}

export default function ({ icon, text, clicked }: IconType) {
    return (

        <div
            className={`
            flex justify-between flex-row items-center 
            px-6 b  border-2  
            w-[40vh] h-12 hover:bg-brown-400
            ${clicked ? 'bg-brown-100' : 'border-brown-500'} 
            transition duration-500 ease-in-out
            `}>
            {icon}

            <span className='text-brown-500 font-semibold'>{text}</span>
        </div>
    )
}