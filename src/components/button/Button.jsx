import style from './Button.module.css';


export function Button (parametrs) {
    return <a className={style.btn} href={parametrs.url}>{parametrs.text}</a>;
}