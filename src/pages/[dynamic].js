import { useRouter } from "next/router";
import Link from "next/link";


const DynamicRoute = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      The current route is: {router.query.dynamic}
      <br></br>
      <Link href="/dynamic" >
        Go to Page Dynamic
      </Link>
    </div>
  )
}

export default DynamicRoute;