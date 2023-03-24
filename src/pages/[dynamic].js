import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";


const DynamicRoute = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <Head>
        <title>{router.query.dynamic}</title>
      </Head>
        The current route is: {router.query.dynamic}
        <br></br>
      <Link href="/dynamic" >
        Go to Page Dynamic
      </Link>
    </div>
  )
}

export default DynamicRoute;