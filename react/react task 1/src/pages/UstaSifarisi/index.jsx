import image from '../../assets/mtt service 1.png'
const UstaSifarisi = () => {
    return (

        <div style={{
            position: "absolute",
            width: '35vw',
            height: '100vh',
            backgroundColor: '#0071BB'
        }}>




            <img style={{
                position: 'absolute',
                width: 202,
                height: 80,
                left: 165,
                top: 422,
                color: 'lightblue'

            }} src={image} alt="" />




            <h2>Usta Sifarisi </h2>



            <input
                style={{
                    width: '20vw',
                    height: '6vh',
                }}
                type="text" placeholder="*Adiniz ve soyadiniz" />



            <input
                style={{
                    width: '20vw',
                    height: '6vh'
                }}
                type="password" placeholder="*Telefon nömrənizi daxil edin " />



            <input style={{
                width: '20vw',
                height: '6vh'
            }} type="text" placeholder="*Sifaris etmek istediyiniz xidmeti secin" />




            <input style={{
                width: '20vw',
                height: '9vh',
            }} type="text" placeholder="*Sifaris haqqinda melumat" />
        </div>
    )

}
export default UstaSifarisi;