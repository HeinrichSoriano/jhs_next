import Link from "next/link";

interface propTypes {
    href: string;
    text: string;
}
const LinkComponent:React.FC<propTypes> = ({href, text}) => {
    return(<>
    <Link href={href}>
        <div className="font-logotype_bold md:text-xl text-xs text-center border border-neutral-800 rounded p-5 md:p-10 ease-linear duration-200 hover:backdrop-invert hover:text-black m-1">{text}</div>
    </Link>
    </>);
}

export default LinkComponent;