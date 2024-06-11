import Button from "../components/common/Button";
import Title from "../components/common/Title";

function Home() {
    return (
        <>
            <Title size='large'>title test</Title>
            <Button size='large' scheme='primary' disabled={true}> 버튼 테스트</Button>
            <div>home body</div>
        </>
    )
}

export default Home;