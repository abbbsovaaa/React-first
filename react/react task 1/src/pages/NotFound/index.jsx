import image404 from '../../assets/404.png.png'
const NotFound = () => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1>Axtardiginiz sehife tapilmadi</h1>
            <img style={{
                    maxWidth: 600,
                    objectFit: 'cover'
                }}
             src={image404} alt="Not Found" />
             
             
        </div>

    )

}
export default NotFound;