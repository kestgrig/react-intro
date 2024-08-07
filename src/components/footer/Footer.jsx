import style from './Footer.module.css'


export function Footer () {
    return (
        <footer className={style.footer}>
            <p>Released under the MIT License. (2c4ef113)</p>
            <p>Copyright &copy; 2019-present Evan You & Vite Contributors</p>
        </footer>
    );
}