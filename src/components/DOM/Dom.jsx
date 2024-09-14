import { useEffect, useState } from "react";

export default function Dom() {
    const [dialogResult, setDialogResult] = useState('');
    const [promptInput, setPromptInput] = useState('');
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    const openNewWindow = () => {
        window.open('https://example.com', '_blank');
    };

    const showAlert = () => {
        alert('Это сообщение!');
    };

    const showConfirm = () => {
        const result = confirm('Вы уверены?');
        setDialogResult(result ? 'Вы выбрали OK' : 'Вы выбрали Cancel');
    };

    const showPrompt = () => {
        const result = prompt('Введите что-нибудь:');
        setPromptInput(result !== null ? result : 'Вы отменили ввод');
    };

    const resizeWindow = () => {
        window.resizeTo(800, 600);
        setWindowSize({ width: 800, height: 600 });
    };

    const moveWindow = () => {
        window.moveTo(100, 100);
    };

    const navigateBack = () => {
        window.history.back();
    };

    const navigateForward = () => {
        window.history.forward();
    };

    const changeContent = (elementId, newContent) => {
        document.getElementById(elementId).innerText = newContent;
    };

    const [namePosition, setNamePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setNamePosition((prevPosition) => ({
                x: prevPosition.x + 1,
                y: prevPosition.y + 1,
            }));

            if (namePosition.x >= window.innerWidth - 200 || namePosition.y >= window.innerHeight - 50) {
                setNamePosition({ x: 0, y: 0 });
            }
        }, 1);

        return () => clearInterval(interval);
    }, [namePosition]);

    return (<>
        <div>
            <h1>Пример приложения на React</h1>
            <button onClick={openNewWindow}>Создать новое окно</button>
            <button onClick={showAlert}>Показать Alert</button>
            <button onClick={showConfirm}>Показать Confirm</button>
            <button onClick={showPrompt}>Показать Prompt</button>
            <button onClick={resizeWindow}>Изменить размер окна</button>
            <button onClick={moveWindow}>Переместить окно</button>
            <button onClick={navigateBack}>Назад</button>
            <button onClick={navigateForward}>Вперед</button>

            <div>
                <h2>Результаты диалоговых окон:</h2>
                <p>{dialogResult}</p>
                <p>Ввод из Prompt: {promptInput}</p>
            </div>

            <div>
                <h2>Изменение содержимого:</h2>
                <div id="content1">Элемент 1</div>
                <div id="content2">Элемент 2</div>
                <div id="content3">Элемент 3</div>
                <button onClick={() => changeContent('content1', 'Новый текст для элемента 1')}>Изменить элемент 1</button>
                <button onClick={() => changeContent('content2', 'Новый текст для элемента 2')}>Изменить элемент 2</button>
                <button onClick={() => changeContent('content3', 'Новый текст для элемента 3')}>Изменить элемент 3</button>
            </div>

            <div>
                <h2>Размер окна:</h2>
                <p>Ширина: {windowSize.width}px, Высота: {windowSize.height}px</p>
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: namePosition.x,
                    top: namePosition.y,
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: 'blue',
                }}
            >
                Вадим
            </div>
        </div>
    </>)
}