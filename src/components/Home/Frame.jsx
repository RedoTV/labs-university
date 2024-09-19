
export default function Frame() {
    return (<>
        <div style={{ width: '600px', height: '300px' }}>
            <iframe
                srcDoc={`<!DOCTYPE html>
                <html>
                    <head>
                    <title>Пример HTML-документа</title>
                    <style>
                        body { 
                        font-family: Arial, sans-serif; 
                        margin-left: 30px;
                        }
                        h1 { color: blue; }
                    </style>
                    </head>
                    <body>
                    <h1>Страница iframe</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ducimus iusto voluptas. Quisquam voluptates hic, odio aperiam culpa neque qui ab debitis atque earum facere quae ipsam nisi eius reprehenderit?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ducimus iusto voluptas. Quisquam voluptates hic, odio aperiam culpa neque qui ab debitis atque earum facere quae ipsam nisi eius reprehenderit?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ducimus iusto voluptas. Quisquam voluptates hic, odio aperiam culpa neque qui ab debitis atque earum facere quae ipsam nisi eius reprehenderit?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ducimus iusto voluptas. Quisquam voluptates hic, odio aperiam culpa neque qui ab debitis atque earum facere quae ipsam nisi eius reprehenderit?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ducimus iusto voluptas. Quisquam voluptates hic, odio aperiam culpa neque qui ab debitis atque earum facere quae ipsam nisi eius reprehenderit?</p>
                    
                    <p>Это небольшой HTML-документ, загруженный в фрейм.</p>
                    </body>
                </html>`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Плавающий фрейм"
            />
        </div>
    </>)
}