import styles from "./media.requests.module.css"

export default function MediaRequests() {
    return (<>
        {/* Меню */}
        <nav className={styles.menu}>
            <ul>
                <li>Главная</li>
                <li>О нас</li>
                <li>Контакты</li>
            </ul>
        </nav>

        {/* Текст с колонками */}
        <div className={styles.content}>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quod dolorum! Cum obcaecati at, accusantium debitis rem labore? Vero nisi molestias porro aliquam excepturi ullam neque! Atque incidunt ducimus veniam!</h4>
            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ad vitae praesentium alias repellendus atque adipisci. Quaerat, excepturi corporis eveniet ipsa voluptate at optio vero, reiciendis nesciunt harum, possimus obcaecati.</h5>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, praesentium quae illum aut iusto corporis. Enim natus voluptatem sapiente numquam ea labore dolores quidem optio unde culpa, harum laudantium nobis!</h6>
            <p>При уменьшении ширины окна браузера текст автоматически преобразуется в одноколонный формат без буквицы.</p>
        </div>

    </>
    )
}