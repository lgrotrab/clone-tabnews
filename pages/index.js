function Home() {
  return (
    <div
      style={{
        margin: "0",
        height: "100vh" /* use 100% of the height of the viewport */,
        display: "grid",
        placeItems: "center",
      }}
    >
      <div>
        <img
          src="https://www.boavista.rr.leg.br/imagens/emconstruo.jpg/image"
          style={{ width: "350px" }}
        ></img>
        <h1
          style={{
            textAlign: "center",
            width: "350px",
          }}
        >
          Uma experiência para compartilhar desenhos, jogos e outros hobbies.
        </h1>
      </div>
    </div>
  );
}

export default Home;
