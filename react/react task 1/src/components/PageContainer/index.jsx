import Header from "./Header"
import TopHeader from "./TopHeader"

const PageContainer = ({ hasBanner, children }) => {
    return (
        <>
            <TopHeader />
            <Header />
            {
                hasBanner && <div>

                </div>
            }
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
export default PageContainer