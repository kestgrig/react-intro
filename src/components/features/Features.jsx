import { Feature } from './Feature';
import style from './Features.module.css';

export function Features() {
    return (
        <section className={style.featuresList}>
            <Feature
                icon="💡" title="Instant Server Start"
                description="On demand file serving over native ESM, no bundling required!" />
            <Feature
                icon="⚡️" title="Lightning Fast HMR"
                description="Hot Module Replacement (HMR) that stays fast regardless of app size." />
            <Feature
                icon="🛠️" title="Rich Features"
                description="Out-of-the-box support for TypeScript, JSX, CSS and more." />
            <Feature
                icon="📦" title="Optimized Build"
                description="Pre-configured Rollup build with multi-page and library mode support." />
            <Feature
                icon="🔩" title="Universal Plugins"
                description="Rollup-superset plugin interface shared between dev and build." />
            <Feature
                icon="🔑" title="Fully Typed APIs"
                description="Flexible programmatic APIs with full TypeScript typing." />
        </section>
    );
}