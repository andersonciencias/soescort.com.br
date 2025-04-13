
import { useState } from "react";

const anuncios = [
  { id: 1, nome: "Julia VIP", cidade: "São Paulo", descricao: "Acompanhante de luxo.", vip: true },
  { id: 2, nome: "Marina", cidade: "Rio de Janeiro", descricao: "Discreta e carinhosa.", vip: false },
];

export default function App() {
  const [cidade, setCidade] = useState("");

  const filtrados = anuncios
    .filter(a => a.cidade.toLowerCase().includes(cidade.toLowerCase()))
    .sort((a, b) => b.vip - a.vip);

  return (
    <div style={{ padding: 20 }}>
      <h1>SoEscort</h1>
      <input
        placeholder="Filtrar por cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      {filtrados.map(a => (
        <div key={a.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <strong>{a.nome} {a.vip && "(VIP)"}</strong>
          <p>{a.cidade}</p>
          <p>{a.descricao}</p>
        </div>
      ))}
    </div>
  );
}
