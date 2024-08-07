import style from './Sponsors.module.css';
import { Button } from '../button/Button';

export function Sponsors () {
    return (
        <section className={style.sponsors}>
            <Button url="#" text="Sponsor Vite"/>
            <Button url="#" text="Sponsor Rimantas"/>
        </section>
    );
}