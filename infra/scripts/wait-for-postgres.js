const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);
  //stdou e stderr são saída padrões de programas, sendo stdou a saída no terminal e stderr a saída de error
  function handleReturn(error, stdout) {
    //recursividade para verificar se o postgres já está aceitando conexões.
    if (stdout.search("accepting connections") === -1) {
      //Adiciona pontos seguidos ao invés de quebrar linha adicionando diretamente na saída.
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    process.stdout.write("\n🟢 Postgres está pronto e aceitando conexões\n");
  }
}

process.stdout.write("\n\n🔴 Aguardando postgres aceitar conexões");
checkPostgres();
