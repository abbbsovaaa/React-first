const Sican = () => {
    return (
        <>
            < h2 style={{
                display: "flex",
                justifyContent: 'space-around',
                border: '1px solid'
            }}>Sicanlar haqqinda</h2>
            <div>
                <img style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: "flex-start",
                    objectFit: "cover",
                    width: 300,
                    height: 300,
                    borderRadius: 300
                }} src="/sican.jpeg" alt="" /> <i style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: "flex-start",
                }}>Siçan qidalanmaq üçüx xüsusi şərtlər seçmir. Onlar qoz-fındıq, bütün meyvə-tərəvəz növlərini yeyirlər. Maraqlıdır ki, siçanların görmə qabiliyyəti zəifdir və bu çatışmazlığı onların kəskin iybilmə və eşitmə qabiliyyətləri kompensasiya edir.
                    Siçanlarla bağlı mənfi rəy təkcə onların görünüşü ilə deyil, həm də onların vəba və s. yoluxucu xəstəliklərin daşıyıcısı olması ilə bağlıdır. Belə ki, 1337-ci ildə məhz siçanlar Avropada “qara ölüm” adını almış vəba epidemiyasını yaymışdılar. Bir neçə il ərzində Avropa əhalisinin 3/1 hissəsi (20-25 milyon insan) bu xəstəliyin qurbanı olmuşdu. Həmin vaxtdan siçanlara həm də ölüm mənbəyi kimi də baxırdılar.
                    Siçovul kimi oxşar gəmiricidən siçanlar öz ölçüləri ilə seçilir. Siçanların ölçüsü maksimum 15-20 sm-a çatır. Bundan başqa, siçanlar daha kiçik qabaritlərə malik olduğu üçün siçovullar qədər əzələ kütləsinə və gücə malik deyillər.</i>
            </div>

        </>
    )
}
export default Sican;