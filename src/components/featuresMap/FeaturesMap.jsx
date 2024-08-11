// import { convertFeatureDataToComponent } from './convertFeatureDataToComponent';
import style from './Features.module.css';
import {Feature} from './Feature'

/* galimas variantas kai duomenys kitame faile(convertFeatureDataToComponent.jsx)
export function FeaturesMap(params) {
    return (
        <section className={style.featuresList}>
            {params.list.map(convertFeatureDataToComponent)}
        </section>
    );
}
*/



export function FeaturesMap(params) {
    return (
         <section className={style.featuresList}>     
            {params.list.map((item, index) =>           
                <Feature key={index} data={item} />)}  
        </section>
    );
}

// is css failo, o style is import
//--masyvo funkcija padedanti ispiesti reiksmes
//--is Feature.jsx failo, key-index prie map, o item irgi is params.list.map((item, index))/*
