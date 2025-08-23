<<<<<<< HEAD
=======
import Image from 'next/image';
>>>>>>> e76dca0cd03223d242335fa10133fb2b83a75f44
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
<<<<<<< HEAD
        <Link href="/" className="font-bold text-2xl text-primary">
            Abhishek Choudhary
=======
        <Link href="/">
            <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={117}
                height={34}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                priority={true}
                className='dark:hidden'
            />
            <Image
                src="/images/logo/DarkModeLogo.svg"
                alt="logo"
                width={160}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                className='dark:block hidden'
            />
>>>>>>> e76dca0cd03223d242335fa10133fb2b83a75f44
        </Link>
    );
};

<<<<<<< HEAD
export default Logo;
=======
export default Logo;
>>>>>>> e76dca0cd03223d242335fa10133fb2b83a75f44
