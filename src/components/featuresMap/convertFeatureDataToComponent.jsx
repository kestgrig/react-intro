import { Feature } from './Feature';

export function convertFeatureDataToComponent(item, index) {
    return <Feature key={index} data={item} />;
}