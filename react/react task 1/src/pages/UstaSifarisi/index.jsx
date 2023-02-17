const UstaSifarisi = () => {
    return (

        <div style={{
            position: "absolute",
            width: '35vw',
            height: '100vh',
            backgroundColor: 'darkblue'
        }}>
            <h1 style={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>MTT </h1>
            <h4 style={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>service</h4>
            <h2>Usta Sifarisi </h2>
            <input
                style={{
                    width: '20vw',
                    height: '6vh'
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