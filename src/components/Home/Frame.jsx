import alien from '../../assets/alien.png'

export default function Frame() {
    return (<>
        <p>Внешняя страница (Компонент в случае React)</p>
        <img src={alien} alt="Пришелец" />
    </>)
}