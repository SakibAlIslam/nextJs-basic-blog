import Link from "next/link";
import Image from "next/image";
import ProfilePhoto from '../../public/images/propic.png'
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
          <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a className="foo">
            back to the home page
          </a>
        </Link>
      </h2>
      <Image
        src={ProfilePhoto} // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  );
}
