import style from './FeaturesBigOne.module.css';

export function FeaturesBigOne(params) {
    return (
        <section className={style.featuresList}>
            {params.data.map((item, index) => (
                <div key={index} className={style.feature}>
                    <div className={style.icon}>{item.icon}</div>
                    <h2 className={style.title}>{item.title}</h2>
                    <p className={style.description}>{item.description}</p>
                </div>
            ))}
        </section>
    );
}