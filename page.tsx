export default function Home() {
  return (
    <main className="container">

      <section className="hero">
        <div className="noise"></div>

        <p className="small">ART / DESIGN / MUSIC / TEXT</p>

        <h1>YUKO</h1>

        <p className="lead">
          神さまが縫い合わせた黒に針で穴を開けたら、光がこぼれた。
        </p>
      </section>

      <section className="about">
        <h2>ABOUT</h2>

        <p>
          東京を拠点に活動。
          デザイン、音楽、写真、言葉、ライブ企画など、
          表現を横断しながら制作。
        </p>
      </section>

      <section className="works">
        <h2>WORKS</h2>

        <div className="grid">

          <article className="card">
            <div className="thumb"></div>
            <h3>POSTER DESIGN</h3>
            <p>ライブフライヤー / ノイズ / コラージュ</p>
          </article>

          <article className="card">
            <div className="thumb"></div>
            <h3>TEXT</h3>
            <p>詩 / 夢 / 断片</p>
          </article>

          <article className="card">
            <div className="thumb"></div>
            <h3>MUSIC</h3>
            <p>ノイズ / アンビエント / 即興</p>
          </article>

        </div>
      </section>

    </main>
  )
}