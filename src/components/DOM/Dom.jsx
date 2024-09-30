import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from './Dom.module.css'

export default function Dom() {
    const [currentTask, setCurrentTask] = useState(-1)
    const [move, setMove] = useState(100)
    const tasks = ['Задание 1', 'Задание 2',]

    const [dialogResult, setDialogResult] = useState('');
    const [promptInput, setPromptInput] = useState('');
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const navigate = useNavigate();

    const openNewWindow = () => {
        window.open('http://localhost:5173/dom/', '_blank', 'width=800,height=600');
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
        window.resizeTo(600, 600);
        setWindowSize({ width: 600, height: 600 });
    };

    const moveWindow = () => {
        window.moveTo(move, move);
        setMove(move + 100);
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

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function firstTask() {
        setCurrentTask(0)
        navigate('floatingname')
    }

    function secondTask() {
        setCurrentTask(1)
        navigate('movingname')
    }

    return (<>
        <div>
            <div className={styles.tasks_nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <button
                            className={`${currentTask === 0 ? styles.active : ''} ${styles.full_height}`}
                            onClick={() => { firstTask() }}>
                            {tasks[0]}
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button
                            className={`${currentTask === 1 ? styles.active : ''} ${styles.full_height}`}
                            onClick={() => { secondTask() }}>
                            {tasks[1]}
                        </button>
                    </li>
                </ul>
            </div>

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
                <h6 id="content1">Элемент 1</h6>
                <h5 id="content2">Элемент 2</h5>
                <h4 id="content3">Элемент 3</h4>
                <button onClick={() => changeContent('content1', 'Новый текст для элемента 1')}>Изменить элемент 1</button>
                <button onClick={() => changeContent('content2', `ширина экрана: ${windowSize.width}`)}>Изменить элемент 2</button>
                <button onClick={() => changeContent('content3', ["Apple", "Orange"].join(' '))}>Изменить элемент 3</button>
            </div>

            <div>
                <h2>Размер окна:</h2>
                <p>Ширина: {windowSize.width}px, Высота: {windowSize.height}px</p>
            </div>
        </div>

        <div>
            <h1>Задания</h1>
            <Outlet />
        </div>
    </>)
}