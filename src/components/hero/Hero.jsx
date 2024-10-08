import Logo from '/public/vite.svg'
import style from'./Hero.module.css'
import { Button } from '../button/Button';


export function Hero () {
  // const imgStyle = {
  //   height: '28rem',
  //   width: '90%',
  // };

  const title = Math.random() > 0.5 
    ? 'Vite Next Generation Frontend Tooling'
    : 'Vite';


  return (
    <section className={style.hero}>
      <div className={style.textContent}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.description}>Get ready for a development environment that can finally catch up with you.</p>
        <div className={style.btnList}>
          <Button url="#" text="Get Started" />
          <Button url="#" text="Why Vite?" />
          <Button url="#" text="View on GitHub" />
          <Button url="#" text="⚡ViteConf 24!" />
        </div>
      </div>
      <img className='imgViteLogo'  src={Logo}  alt="Vite image" />
    </section>
  );
}

// background-color(CSS) > backgroundColor(React)

// CSS: style = "background-color: red; font-size: 16px";
// React: style = {{backgroundColor: 'red', fontSize: '16px'}};

// statinis stilius {style.hero + 'red'}, red index.css faile;