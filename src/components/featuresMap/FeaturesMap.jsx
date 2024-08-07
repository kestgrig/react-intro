import { convertFeatureDataToComponent } from './convertFeatureDataToComponent';
import style from './Features.module.css';

export function FeaturesMap(params) {
    return (
        <section className={style.featuresList}>
            {params.list.map(convertFeatureDataToComponent)}
        </section>
    );
}