import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/" className="font-bold text-2xl text-primary">
            Abhishek Choudhary
        </Link>
    );
};

export default Logo;