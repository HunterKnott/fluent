import Link from 'next/link';

export default function PageLink({ path, text}) {
    return (
        <Link href={path}>
            <button className="text=gray-800 transition-colors duration-150 hover:text-green-500">{text}</button>
        </Link>
    )
}