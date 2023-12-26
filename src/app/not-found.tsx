import { NextPage } from "next"
import NextLink from "@/components/common/NextLink";

const NotFound: NextPage = () => {
    return (
        <div>
            <div>페이지를 찾을 수 없음.</div>
            <NextLink href="/home">
                홈으로 이동
            </NextLink>
        </div>
    )
}

export default NotFound;