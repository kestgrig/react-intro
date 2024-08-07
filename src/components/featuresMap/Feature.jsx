import style from './Features.module.css';

export function Feature(params) {
    const { icon, title, description } = params.data;

    return (
        <div className={style.feature}>
            <div className={style.icon}>{icon}</div>
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>{description}</p>
        </div>
    );
}