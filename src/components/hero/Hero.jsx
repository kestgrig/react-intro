import imageVite from '/vite.svg'
import './Hero.css'


export function Hero () {
  const imgStyle = {
    height: '15rem',
  };

  const title = Math.random() > 0.5 
    ? 'Vite Next Generation Frontend Tooling'
    : 'Well Done';


  return (
    <section>
      <div>
        <h1>{title}</h1>
        <p>Get ready for a development environment that can finally catch up with you.</p>
        <div>
          <a href="#">Get Started</a>
          <a href="#">Why Vite?</a>
          <a href="#">Viem on GitHub</a>
          <a href="#">⚡ViteConf 24!</a>
        </div>
      </div>
      <img className="imageVite" src={imageVite} style={imgStyle}  alt="Vite image" />
    </section>
  );
}

// background-color(CSS) > backgroundColor(React)

// CSS: style = "background-color: red; font-size: 16px";
// React: style = {{backgroundColor: 'red', fontSize: '16px'}};