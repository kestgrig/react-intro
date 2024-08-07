import style from './Features.module.css';

export function Feature(params) {
    return (
        <div className={style.feature}>
            <div className={style.icon}>{params.icon}</div>
            <h2 className={style.title}>{params.title}</h2>
            <p className={style.description}>{params.description}</p>
        </div>
    );
}